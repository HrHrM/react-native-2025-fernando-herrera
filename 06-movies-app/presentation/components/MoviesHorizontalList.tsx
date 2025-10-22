import { Movie } from '@/infrastructure/interfaces/movies.interface';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
    className?: string;
}

const MoviesHorizontalList = ({ title, movies, className = '' }: Props) => {
    return (
        <View className={className}>
            {title && (
                <Text className='text-3xl font-bold mt-2 px-4 mb-4'>{title}</Text>
            )}

        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        data={movies}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
        />

        </View>
    )
}

export default MoviesHorizontalList