import { useAnimation } from '@/hooks/use-animation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Animated, Easing, Text } from 'react-native';

const Animation101Screen = () => {

  const { animatedOpacity, animatedTop, animatedPan, panResponder, fadeIn, fadeOut, startAnimationFromTop } = useAnimation();
  
  return (
    <>

      <Text className=' text-2xl font-bold text-center'>
        Two buttons that will fade in and out
      </Text>
      <ThemedView margin className='items-center justify-center flex-1'>

        <Animated.View
          className='bg-light-secondary dark:bg-dark-secondary rounded-xl p-4'
          style={{
            width: 150,
            height: 150,
            opacity: animatedOpacity,
            transform: [
              { translateX: animatedPan.x },
              { translateY: Animated.add(animatedTop, animatedPan.y) },
            ],
          }}
          {...panResponder.panHandlers}
        >

        </Animated.View>
        <ThemedButton
          onPress={() => {
            fadeIn({ duration: 300, toValue: 1, useNativeDriver: true, easing: Easing.linear });
            startAnimationFromTop({ initialValue: -100, duration: 700, toValue: 0, useNativeDriver: true, easing: Easing.bounce });
          }}
          className='mt-4'
        >
          Fade In
        </ThemedButton>
        <ThemedButton
          onPress={() => {
            fadeOut({ duration: 300, toValue: 0, useNativeDriver: true, easing: Easing.linear, callback: () => {
              animatedTop.resetAnimation();
            } });
          }}
          className='mt-4'
        >
          Fade Out
        </ThemedButton>
      </ThemedView>
    </>
  );
};
export default Animation101Screen;
