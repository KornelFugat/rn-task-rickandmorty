import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        gap: 16,
        top: 16,
    },
    searchContainer: {
        paddingHorizontal: 16,
        gap: 16
    },
    header: {
        fontFamily: 'Inter_18pt-Regular',
        fontSize: 36,
        fontWeight: 500,
        lineHeight: 43.57,
        letterSpacing: -0.06,
        color: '#162C1B',
    },
    list: {
        flex: 1,
    }
});
