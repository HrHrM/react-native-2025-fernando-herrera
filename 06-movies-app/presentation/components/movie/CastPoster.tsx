import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface Props {
  id: number;
  avatar: string;
  smallPoster?: boolean;
  className?: string;
  name: string;
  character: string;
}

const CastPoster = ({ id, avatar, smallPoster = false, className = '', name, character }: Props) => {
  
  const width = smallPoster ? 85 : 150;
  const height = smallPoster ? 130 : 250;

  return (

      <View style={{ width, height }} className={`rounded-2xl overflow-hidden mr-4 ${className}`}>
        <Image
          key={id}
          source={{ uri: avatar }}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
        />

        <LinearGradient
          colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0)"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0 }}
        />

        <View style={{ position: 'absolute', left: 8, right: 8, bottom: 8 }}>
          <Text numberOfLines={1} className='text-white font-semibold text-md text-center'>
            {name}
          </Text>
        <Text className="text-gray-200 text-sm text-center">{character}</Text>
        </View>

      </View>
  )
}

export default CastPoster