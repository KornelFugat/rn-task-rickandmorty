import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    filterButton: {
        width: '100%',
        backgroundColor: '#224229',
        borderRadius: 22,
        gap: 10,
        justifyContent: 'center',
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 24,
        gap: 8
    },
    filterButtonText: {
        fontFamily: 'DMMono-Regular',
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 18.23
    },
});