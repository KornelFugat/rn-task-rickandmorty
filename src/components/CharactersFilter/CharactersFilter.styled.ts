import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 358,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#224229',
        padding: 16,
        gap: 24,
        shadowColor: '#224229',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 4,
    },
    section: {
        gap: 8
    },
    sectionTitle: {
        fontFamily: 'DMMono-Regular',
        fontSize: 14,
        fontWeight: 500,
        color: '#59695C',
        lineHeight: 18.23
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resetButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#224229',
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resetButtonText: {
        fontFamily: 'DMMono-Regular',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 18.23,
        color: '#224229',
    },
    applyButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#224229',
        borderRadius: 100,
    },
    applyButtonText: {
        fontFamily: 'DMMono-Regular',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 18.23,
        color: '#fff',
    },
});