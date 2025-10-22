import React from 'react';
import { Image, Pressable } from 'react-native';

interface Props {
    id: number;
    poster: string;
    smallPoster?: boolean;
    className?: string;
}

const MoviePoster = ({ id, poster, smallPoster = false, className = '' }: Props) => {
  return (
    <Pressable className={`active:opacity-50 px-2 ${className}`}>
        <Image
            key={id}
            source={{ uri: poster }}
            className='shadow-lg rounded-2xl w-full h-full'
            resizeMode="cover"
            style={{
                width: smallPoster ? 85 : 150,
                height: smallPoster ? 130 : 250,
            }}
        />
    </Pressable>
  )
}

export default MoviePoster