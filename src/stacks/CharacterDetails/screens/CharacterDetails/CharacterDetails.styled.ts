import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 5,
        gap:16,
        backgroundColor: '#f0f0f0',
    },
    backLinkContainer: {
        top: 5,
        paddingLeft: 16,
        paddingRight: 16,
        gap: 10,
        alignItems: 'flex-start'
    },
    backLink: {
        alignSelf: 'flex-start',
        gap: 10
    },
    backLinkText: {
        fontFamily: 'Inter_18pt-Regular',
        color: '#59695C',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 14.52,
        letterSpacing: -0.02,
        borderBottomWidth: 1,
        borderColor: '#59695C',
    },
    cardContainer: {
        padding: 16,
        gap: 16,
        alignItems: 'center',
        marginBottom: 32,
    },
});
