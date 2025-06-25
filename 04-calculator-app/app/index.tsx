import { CalculatorButton } from '@/components/CalculatorButton';
import { ThemeText } from '@/components/ThemeText';
import { Colors } from '@/constants/Colors';
import { useCalculator } from '@/hooks/useCalculator';
import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function CalculatorApp() {
    const {
        buildNumber, clean, formula, toggleSign, deleteLast, divideOperation, multiplyOperation, subtractOperation, addOperation, calculateSubResult, calculateResult, number, prevNumber
    } = useCalculator()
    return (
        <View style={globalStyles.calculatorContainer}>
            <View style={styles.container}>
                <ThemeText
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    minimumFontScale={0.5}
                    variant='h1'>
                    {formula}
                </ThemeText>
                {
                    formula === prevNumber ? (
                        <ThemeText
                            variant='h2'>

                        </ThemeText>
                    ) : (
                        <ThemeText
                            variant='h2'>
                            {prevNumber}
                        </ThemeText>
                    )
                }
            </View>
            {/* C, +/-, del, % rows */}
            <View style={globalStyles.row}>
                <CalculatorButton
                    label='C'
                    backgroundColor={Colors.lightGray}
                    textColor={Colors.darkGray}
                    onPress={() => {
                        clean();
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.lightGray}
                    textColor={Colors.darkGray}
                    label='+/-'
                    onPress={() => {
                        toggleSign();
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.lightGray}
                    textColor={Colors.darkGray}
                    label='del'
                    onPress={() => {
                        deleteLast();
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.orange}
                    textColor={Colors.textPrimary}
                    label='%'
                    onPress={() => {
                        divideOperation();
                    }}
                />
            </View>
            {/* 7, 8, 9, / rows */}
            <View style={globalStyles.row}>
                <CalculatorButton
                    label='7'
                    backgroundColor={Colors.darkGray}
                    textColor={Colors.textPrimary}
                    onPress={() => {
                        buildNumber('7');
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.darkGray}
                    textColor={Colors.textPrimary}
                    label='8'
                    onPress={() => {
                        buildNumber('8');
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.darkGray}
                    textColor={Colors.textPrimary}
                    label='9'
                    onPress={() => {
                        buildNumber('9');
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.orange}
                    textColor={Colors.textPrimary}
                    label='X'
                    onPress={() => {
                        multiplyOperation();
                    }}
                />
            </View>
            {/* 4, 5, 6, - rows */}
            <View style={globalStyles.row}>
                <CalculatorButton
                    label='4'
                    backgroundColor={Colors.darkGray}
                    textColor={Colors.textPrimary}
                    onPress={() => {
                        buildNumber('4');
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.darkGray}
                    textColor={Colors.textPrimary}
                    label='5'
                    onPress={() => {
                        buildNumber('5');
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.darkGray}
                    textColor={Colors.textPrimary}
                    label='6'
                    onPress={() => {
                        buildNumber('6');
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.orange}
                    textColor={Colors.textPrimary}
                    label='-'
                    onPress={() => {
                        subtractOperation();
                    }}
                />
            </View>
            {/* 1, 2, 3, + rows */}
            <View style={globalStyles.row}>
                <CalculatorButton
                    label='1'
                    backgroundColor={Colors.darkGray}
                    textColor={Colors.textPrimary}
                    onPress={() => {
                        buildNumber('1');
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.darkGray}
                    textColor={Colors.textPrimary}
                    label='2'
                    onPress={() => {
                        buildNumber('2');
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.darkGray}
                    textColor={Colors.textPrimary}
                    label='3'
                    onPress={() => {
                        buildNumber('3');
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.orange}
                    textColor={Colors.textPrimary}
                    label='+'
                    onPress={() => {
                        addOperation();
                    }}
                />
            </View>
            {/* 0, ., = rows */}
            <View style={globalStyles.row}>
                <CalculatorButton
                    label='0'
                    doubleSized
                    backgroundColor={Colors.darkGray}
                    textColor={Colors.textPrimary}
                    onPress={() => {
                        buildNumber('0');
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.darkGray}
                    textColor={Colors.textPrimary}
                    label='.'
                    onPress={() => {
                        buildNumber('.');
                    }}
                />
                <CalculatorButton
                    backgroundColor={Colors.orange}
                    textColor={Colors.textPrimary}
                    label='='
                    onPress={() => {
                        calculateResult();
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    }
});