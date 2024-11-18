import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    card: {
        width: 358,
        padding: 12,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#224229',
        backgroundColor: '#F4F6F5',
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#224229',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 4,
    },
    cardPressed: {
        backgroundColor: '#fff',
    },
    detailedCard: {
        flexDirection: 'column',
        padding: 20,
    },
    imageWrapper: {
        width: 200,
        height: 200,
        borderRadius: 24,
        borderWidth: 1,
        overflow: 'hidden',
        position: 'relative',
        gap: 15
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 24,
    },
    info: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 114,
        gap: 0,
    },
    label: {
        padding: 8,
        gap: 4,
    },
    labelSmall: {
        fontFamily: 'DMMono-Regular',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 15.62,
        letterSpacing: 0.08,
        textAlign: 'left',
        color: '#59695C'
    },
    bodyText: {
        fontFamily: 'Inter_18pt-Regular',
        fontSize: 16,
        fontWeight: '400',
        color: '#162C1B',
        lineHeight: 19.36,
        letterSpacing: -0.02,
        textAlign: 'left'

    },
    likeButton: {
        position: 'absolute',
        flexDirection:'row',
        bottom: 35,
        right: 22,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 12,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#224229',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        gap: 4
    },
    likedButton: {
        backgroundColor: '#DAE4DC',
    },
    likeButtonText: {
        fontFamily: 'DMMono-Regular',
        fontWeight: 400,
        color: '#224229',
    },
});