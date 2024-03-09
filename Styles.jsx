import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    button: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    text: {
        fontSize: 32,
        color: '#ffffff',
    },
    row: {
        flexDirection: 'row',
        maxWidth: '100%',
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    number: {
        fontSize: 90,
        fontWeight: '200',
        alignSelf: 'flex-end',
        color: '#000000',
    },
})
