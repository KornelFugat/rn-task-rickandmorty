import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        gap: 8,
    },
    box: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#DAE4DC',
    },
    checkedBox: {
        backgroundColor: '#162C1B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontFamily: 'Inter_18pt-Regular',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19.36,
        letterSpacing: -0.02,
        color: '#162C1B',
    },
});