import { globalStyles } from "@/styles/global-styles";
import * as Haptics from 'expo-haptics';
import { Pressable, Text, type PressableProps } from "react-native";

interface CalculatorButtonProps extends PressableProps {
    label: string;
    backgroundColor?: string;
    textColor?: string;
    doubleSized?: boolean;
    onPress?: () => void;
}

export const CalculatorButton = ({ label, backgroundColor, textColor, onPress, doubleSized = false, ...props }: CalculatorButtonProps) => {

    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.calculatorButton,
                backgroundColor: backgroundColor,
                opacity: pressed ? 0.8 : 1,
                width: doubleSized ? '45%' : '20%',
            })}
            onPress={()=>{
                onPress?.()
                Haptics.selectionAsync();
            }}
        >
            <Text
                style={[globalStyles.calculatorButtonText, { color: textColor }]}
            >
                {label}
            </Text>
        </Pressable>
    )
}

