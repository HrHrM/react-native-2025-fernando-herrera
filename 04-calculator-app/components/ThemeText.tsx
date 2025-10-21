import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import { StyleSheet, Text, type TextProps } from 'react-native';

interface ThemeTextProps extends TextProps {
    variant?: 'h1' | 'h2';
}

export const ThemeText = ({ children, variant = 'h1', ...props }: ThemeTextProps) => {
    console.log("test");
    return (
        <Text
            style={[
                styles.text,
                variant === 'h1' && globalStyles.mainResult, variant === 'h2' && globalStyles.subResult
            ]}
            {...props}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontFamily: 'SpaceMono',
        color: Colors.textPrimary,
    }
});