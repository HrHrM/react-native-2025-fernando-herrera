import { globalStyles } from '@/styles/global-styles';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

// const isAndroid = Platform.OS === 'android'

// if (isAndroid) {
//   NavigationBar.setBackgroundColorAsync('black');
// }


export default function RootLayout() {

const [loaded] = useFonts({
  'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf')
})

if (!loaded) {
  return null;
}

  return (
    <View style={globalStyles.viewContainer}>
      <Slot/>
      <StatusBar style='light'/>
    </View>
  )
}
