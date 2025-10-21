import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

interface Props extends PressableProps {
    children: React.ReactNode;
    color: 'primary' | 'secondary' | 'secondary100' | 'secondary200' | 'tertiary' | 'transparent';
    textColor: 'white' | 'black';
    variant: 'contained' | 'text-only';
    className?: string;
}

const CustomButton = React.forwardRef(
    (
        { children, color, onPress, onLongPress, variant = 'contained', textColor = 'white', className }: Props, 
        ref: React.Ref<View>
    ) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary-default',
        secondary100: 'bg-secondary-100',
        secondary200: 'bg-secondary-200',
        tertiary: 'bg-tertiary',
        transparent: 'bg-transparent',
    }[color];

    const txtColor = {
        white: 'text-white',
        black: 'text-black',
    }[textColor];

    if(variant === 'text-only') {
        return (
            <Pressable
                className={`p-3 ${className}`}
                onPress={onPress}
                onLongPress={onLongPress}
                ref={ref}
            >
                <Text className={`${txtColor} text-center font-work-medium`}>
                    {children}
                </Text>
            </Pressable>
        )
    }

    return (
        <Pressable
            className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
            onPress={onPress}
            onLongPress={onLongPress}
            ref={ref}
            >
            <Text className={`${txtColor} text-center font-work-medium`}>
                {children}
            </Text>
        </Pressable>

    )
}
);

export default CustomButton