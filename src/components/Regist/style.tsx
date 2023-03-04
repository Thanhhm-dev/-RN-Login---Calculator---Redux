import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    login: {
        flex: 4,
        alignItems: 'center'
    },
    header: {
        flex: 1
    },
    form: {
        width: '80%',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    textInput: {
        width: '100%',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#FFCC66',
        padding: 12,
        margin: 9,
        backgroundColor: '#FFCC66',
        paddingHorizontal: 20
    },
    button: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 50,
        padding: 12,
        marginTop: 9,
        backgroundColor: '#fcc421',
        borderColor: '#e7e7e7'
    },
    buttonText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
    },
    footer: {
        flex: 1
    },
    footerImg: {
        resizeMode: 'contain',
        height: 200
    }
});

export default Styles