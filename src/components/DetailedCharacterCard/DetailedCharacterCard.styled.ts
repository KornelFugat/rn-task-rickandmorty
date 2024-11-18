import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        width: 358,
        backgroundColor: '#fff',
        borderRadius: 24,
        borderWidth: 1,
        padding: 24,
        gap: 16,
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width:'100%',
        height: 310,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#224229',
        gap: 10,
    },
    infoContainer: {
        width: '100%',
        gap: 16
    },
    nameContainer: {
        width: '100%',
        padding: 8,
        gap: 4,
    },
    labelSmall: {
        fontFamily: 'DMMono-Regular',
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 15.62,
        letterSpacing: 0.08,
        color: '#59695C'
    },
    heading: {
        fontFamily: 'Inter_18pt-Regular',
        fontSize: 36,
        fontWeight: 500,
        lineHeight: 43.57,
        letterSpacing: -0.06,
        color: '#162C1B'
    },
    details: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 16
    },
    detailItem: {
        width: '45%',
        height: 55,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F4F6F5',
        backgroundColor: '#F4F6F5',
        padding: 8,
        gap: 4,
    },
    longDetailItem: {
        height: 70
    },
    label: {
        fontFamily: 'DMMono-Regular',
        fontWeight: 500,
        fontSize: 12,
        lineHeight: 15.62,
        letterSpacing: 0.08,
        color: '#59695C'
    },
    value: {
        fontFamily: 'Inter_18pt-Regular',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19.36,
        letterSpacing: -0.02,
        color: '#162C1B',
    },
    longValue: {
        fontSize: 13,
        bottom: 2
    },
    likeButton: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#224229',
        borderRadius: 100,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 12
    },
    likedButton: {
        backgroundColor: '#162C1B'
    },
    likeButtonText: {
        color: '#fff',
        fontFamily: 'DMMono-Regular',
        fontSize: 14,
        fontWeight: 400,
        marginLeft: 5,
        lineHeight: 18.23
    },
});
