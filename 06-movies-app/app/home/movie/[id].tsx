import CastHorizontalList from '@/presentation/components/movie/CastHorizontalList';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MovieScreen = () => {

    const safeAreaInsets = useSafeAreaInsets();
    const { id } = useLocalSearchParams();

    const { movieByIdQuery, castQuery } = useMovie(id as string);

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
            <MovieHeader 
                poster={movieByIdQuery.data.poster} 
                originalTitle={movieByIdQuery.data.originalTitle} 
                title={movieByIdQuery.data.title}
            />
            <MovieDescription movieDetails={movieByIdQuery.data} />
            
            <CastHorizontalList title='Cast' cast={castQuery.data ?? []}  className='mb-10'/>
        </ScrollView>
    )
}

export default MovieScreen