import { useRef } from "react";
import { Animated, Easing, PanResponder } from "react-native";

export const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;
    const animatedPan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event(
                [null, { dx: animatedPan.x, dy: animatedPan.y }],
                { useNativeDriver: false },
            ),
            onPanResponderRelease: () => {
                Animated.spring(animatedPan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true,
                }).start();
            },
        })
    ).current;

  
    const fadeIn = ({ duration = 300, toValue = 1, useNativeDriver = true, easing = Easing.linear, callback = () => {} }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing,
        }).start(callback);   
    }
  
    const fadeOut = ({ duration = 300, toValue = 0, useNativeDriver = true, easing = Easing.linear, callback = () => {} }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing,
        }).start(callback);
  
        // Animated.timing(animatedTop, {
        //     toValue: -100,
        //     duration: 300,
        //     useNativeDriver: true,
        // }).start();
    }

    const startAnimationFromTop = ({ initialValue = 0, duration = 700, toValue = 0, useNativeDriver = true, easing = Easing.bounce, callback = () => {} }) => {

        animatedTop.setValue(initialValue);
        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing,
        }).start(callback);  
    }
  

    return {
        animatedOpacity,
        animatedTop,
        animatedPan,
        panResponder,
        fadeIn,
        fadeOut,
        startAnimationFromTop,
    }
}