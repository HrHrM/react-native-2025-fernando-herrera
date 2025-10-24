import { Formatter } from '@/config/helpers/formatter';
import { MovieDetails } from '@/infrastructure/interfaces/movies.interface';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
    movieDetails: MovieDetails;
}

const MovieDescription = ({ movieDetails }: Props) => {
  return (
    <View className='mx-5'>
        <View className='flex flex-row'>
            <Text> {movieDetails.rating} </Text>
            <Text> - {movieDetails.genre.join(' / ')} </Text>
        </View>
        <Text className='font-bold mt-5'>
            Historia
        </Text>
        <Text className='font-normal mt-2'>
            {movieDetails.description}
        </Text>
        <Text className='font-bold mt-2 text-2xl'>
            Presupuesto: {Formatter.currency(movieDetails.budget ?? 0)}
        </Text>
    </View>
  )
}

export default MovieDescription;