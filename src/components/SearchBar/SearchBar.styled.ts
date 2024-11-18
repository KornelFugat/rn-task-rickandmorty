import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    outerContainer: {
        width: 358,
        gap: 10,
    },
    inputBar: {
        borderWidth: 1,
        borderColor: '#162C1B',
        borderRadius: 100,
        backgroundColor: '#fff',
        height: 36,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 14,
    },
    inputContent: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        left: 12,
        right: 12,
        top: 0,
        bottom: 0,
        gap: 8
    },
    icon: {
        marginRight: 8,
    },
    input: {
        fontSize: 16,
        fontFamily: 'Inter_18pt-Regular',
        fontWeight: 400,
        color: '#224229',
        lineHeight: 19.36,
        letterSpacing: -0.02,
        padding: 0,
        flex: 1,
    },
    clearButton: {
        marginLeft: 8,
        borderRadius: 4,
    },
    clearButtonPressed: {
        backgroundColor: '#DAE4DC',
    },
});

