import { MovieCast } from '@/infrastructure/interfaces/movies.interface';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import CastPoster from './CastPoster';

interface Props {
    title?: string;
    cast: MovieCast[];
    className?: string;
}

const CastHorizontalList = ({ title, cast, className = '' }: Props) => {

    return (
        <View className={className}>
            {title && (
                <Text className='text-3xl font-bold mt-2 px-4 mb-4'>{title}</Text>
            )}

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => `${item.id.toString()}-${index}`}
                data={cast}
                // renderItem={({ item }) => <Text>{item.name}</Text>}
                renderItem={({ item }) => <CastPoster id={item.id} avatar={item.avatar} name={item.name} character={item.character} />}
            />

        </View>
    )
}

export default CastHorizontalList