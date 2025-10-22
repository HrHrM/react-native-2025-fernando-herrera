import { Movie } from '@/infrastructure/interfaces/movies.interface';
import React, { useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';
// import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import MoviePoster from './MoviePoster';


interface Props {
    movies: Movie[];
}

const MainSlideShow = ({ movies }: Props) => {
	// const progress = useSharedValue<number>(0);

    const ref = useRef<ICarouselInstance>(null);
    const width = useWindowDimensions().width;
    return (
        <View className='h-[250px] w-full'>
            <Carousel
            ref={ref}
            data={movies}
            renderItem={({ item }) => (
                <MoviePoster id={item.id} poster={item.poster}/>
            )}
                width={200}
				height={350}
				style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center',
				}}
				mode="parallax"
				modeConfig={{
                    parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: 50,
				}}
                defaultIndex={1}
				// onProgressChange={progress}
			/>
        </View>
    )
}

export default MainSlideShow