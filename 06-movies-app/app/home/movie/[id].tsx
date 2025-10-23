import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MovieScreen = () => {
    
    const safeAreaInsets = useSafeAreaInsets();
    const { id } = useLocalSearchParams();

    const { movieByIdQuery } = useMovie(id as string);

    if (movieByIdQuery.isLoading || !movieByIdQuery.data) {

        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator size='large' color='purple' />
            </View>
        );
    }

    if (movieByIdQuery.isError) {
        return (
            <View className='justify-center items-center flex-1'>
                <Text>Error</Text>

            </View>
        );
    }

    return (
        <ScrollView>
            <View className='mt-2 pb-10' style={{ paddingTop: safeAreaInsets.top, paddingBottom: safeAreaInsets.bottom }}>
                <Text>{movieByIdQuery.data?.title}</Text>
            </View>
        </ScrollView>
    )
}

export default MovieScreen