import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
    className?: string;
    children: string;
}

const ThemedButton = ({ onPress, className, children, ...rest }: Props) => {
    return (
        <Pressable
            onPress={onPress}
            className={`${className} bg-light-primary dark:bg-dark-primary p-2 items-center rounded-xl px-6 py-2 active:opacity-80`}
            {...rest}
        >
            <Text className='text-white dark:text-white text-2xl font-medium'>{children}</Text>
        </Pressable>
    )
}

export default ThemedButton