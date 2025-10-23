import { Movie } from '@/infrastructure/interfaces/movies.interface';
import React, { useEffect, useRef } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
    className?: string;
    loadNextPage?: () => void;
}

const MoviesHorizontalList = ({ title, movies, className = '', loadNextPage }: Props) => {

    const isLoading = useRef(false);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

        if(!isEndReached) return;

        isLoading.current = true;

        loadNextPage && loadNextPage();
        isLoading.current = false;
    }

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200);
    }, [movies]);

    return (
        <View className={className}>
            {title && (
                <Text className='text-3xl font-bold mt-2 px-4 mb-4'>{title}</Text>
            )}

        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.id.toString()}-${index}`}
        data={movies}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
        onScroll={onScroll}
        />

        </View>
    )
}

export default MoviesHorizontalList