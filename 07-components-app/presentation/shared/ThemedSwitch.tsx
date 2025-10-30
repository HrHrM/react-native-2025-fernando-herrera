import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import { Platform, Pressable, Switch } from 'react-native';
import ThemedText from './ThemedText';

interface Props {
    className?: string;
    text?: string;
    value: boolean;

    onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({ className, text, value, onValueChange }: Props) => {

    const switchActiveColor = isAndroid ? useThemeColor({}, 'primary') : '#f4f3f4';

    return (
        <Pressable className={`flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
        onPress={() => onValueChange(!value)}
        >
            {text && <ThemedText type='h2'>{text}</ThemedText>}
            <Switch
                thumbColor={switchActiveColor}
                  trackColor={{ false: 'gray', true: switchActiveColor }}
                //   thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
                //   ios_backgroundColor="#3e3e3e"
                onValueChange={onValueChange}
                value={value}
            />
        </Pressable>
    )
}

export default ThemedSwitch