import { useThemeColor } from '@/hooks/use-theme-color';
import { Ionicons } from '@expo/vector-icons';
import { Href, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';
import ThemedText from '../shared/ThemedText';

interface Props {
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
    name: string;

    isFirst?: boolean;
    isLast?: boolean;
}

const MenuItem = ({ title, icon, name, isFirst = false, isLast = false }: Props) => {

    const primaryColor = useThemeColor({}, 'primary');
    const router = useRouter();
    const [routeName] = name.split('/');

    return (
        <Pressable onPress={() => { 
            console.log('name', name);
            router.push(routeName as Href)
        }}
            className='bg-white dark:bg-black/15 py-2 px-5'
            style={{
                ...(isFirst && {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingTop: 10,
                }),
                ...(isLast && {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingBottom: 10,
                }),
            }}
        >
            <View className='flex-row items-center'>
                <Ionicons
                    name={icon}
                    size={20}
                    color={primaryColor}
                    className='mr-2'
                />
            <ThemedText type='h2'>{title}</ThemedText>
            </View>
        </Pressable>
    )
}

export default MenuItem