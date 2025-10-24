import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';
interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {

  const { height: screenHeight } = useWindowDimensions();

  return (
    <>
      <LinearGradient
        colors={['rgb(16, 260, 246, 0.3)', 'transparent']}
        style={{
          position: 'absolute',
          height: screenHeight * 0.4,
          zIndex: 1,
          width: '100%',
        }}
        start={[0, 0]}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          elevation: 9,
          top: 40,
          left: 15,
        }}
      >
        <Pressable
          className='absolute top-5 left-5 bg-blue-500/70 p-2 rounded-full'
          onPress={() => router.back()}
        >
          <Ionicons name='arrow-back' size={30} color='white' />
        </Pressable>
      </View>
      <View
        className='shadow-xl shadow-black/20'
        style={{ height: screenHeight * 0.6 }}
      >
        <View
          className='flex-1 rounded-b-2xl overflow-hidden'
        >
          <Image
            className='flex-1'
            source={{ uri: poster }}
            resizeMode='cover'
          />
        </View>
      </View>

      <View className='px-5 mt-5'>
        <Text className='text-lg font-normal'>{originalTitle}</Text>
        <Text className='text-xl font-bold'>{title}</Text>
      </View>
    </>
  )
}

export default MovieHeader;