import { useState } from 'react';

import { useThemeChangerContext } from '@/presentation/context/ThemeChangerContext';

import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';

const ThemesScreen = () => {

  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } =
    useThemeChangerContext(); 

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    console.log('Set Dark mode:', value);
    // setColorScheme(value ? 'dark' : 'light');
    toggleTheme();

    // setDarkModeSettings({
    //   darkMode: value,
    //   systemMode: false,
    // });
  };

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();
    }

    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView margin>
      <ThemedCard className="mt-5">
        <ThemedSwitch
          text="Dark Mode"
          className="mb-5"
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />

        <ThemedSwitch
          text="System Mode"
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;