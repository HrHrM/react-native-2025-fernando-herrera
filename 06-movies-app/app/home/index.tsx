import MainSlideShow from '@/presentation/components/MainSlideShow';
import MoviesHorizontalList from '@/presentation/components/MoviesHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {

  const safeAreaInsets = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, bestScoreQuery, toBeReleasedQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {

    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator size='large' color='purple' />
      </View>
    );
  }

  if (nowPlayingQuery.isError) {
    return (
      <View className='justify-center items-center flex-1'>
        <Text>Error</Text>

      </View>
    );
  }

  return (
    <ScrollView>
      <View className='mt-2 pb-10' style={{ paddingTop: safeAreaInsets.top, paddingBottom: safeAreaInsets.bottom }}>
        <Text className='text-3xl font-bold mt-2 px-4 mb-2'>MoviesApp</Text>

        <MainSlideShow movies={nowPlayingQuery.data ?? []} />


        <MoviesHorizontalList title='Popular Movies' className='mb-5' movies={popularQuery.data ?? []} />
        <MoviesHorizontalList title='Best Score Movies' className='mb-5' movies={bestScoreQuery.data ?? []} />
        <MoviesHorizontalList title='To Be Released Movies' className='mb-5' movies={toBeReleasedQuery.data ?? []} />
        <MoviesHorizontalList className='mb-5' movies={toBeReleasedQuery.data ?? []} />
      </View>
    </ScrollView>
  )
}

export default HomeScreen