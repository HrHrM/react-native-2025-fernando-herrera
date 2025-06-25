import { Colors } from "@/constants/Colors"
import { StyleSheet } from "react-native"


export const globalStyles = StyleSheet.create({
    viewContainer: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400',
        fontFamily: 'SpaceMono',
    },
    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300',
        fontFamily: 'SpaceMono',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    calculatorButton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    calculatorButtonText: {
        fontSize: 30,
        fontWeight: '300',
        fontFamily: 'SpaceMono',
    }
})