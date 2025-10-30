import { useAnimation } from '@/hooks/use-animation';
import ThemedView from '@/presentation/shared/ThemedView';
import { Animated, Text } from 'react-native';

const Animation102Screen = () => {

  const { animatedOpacity, animatedTop, animatedPan, panResponder } = useAnimation();

  return (
    <>

      <Text className=' text-2xl font-bold text-center'>
        Moving a view with a pan gesture
      </Text>
      <ThemedView margin className='items-center justify-center flex-1'>
        <Animated.View
          className='bg-light-secondary dark:bg-dark-secondary rounded-xl p-4'
          style={{
            width: 150,
            height: 150,
            opacity: 100,
            transform: [
              { translateX: animatedPan.x },
              { translateY: Animated.add(animatedTop, animatedPan.y) },
            ],
          }}
          {...panResponder.panHandlers}
        >

        </Animated.View>
      </ThemedView>
    </>
  );
};
export default Animation102Screen;
