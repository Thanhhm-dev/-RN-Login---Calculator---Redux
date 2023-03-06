import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    screen: {
        flex: 3,
        backgroundColor: '#000000',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        
    },
    show: {
        color: '#ffffff',
        marginRight: 15,
        fontSize: 70,
        fontWeight: '200'
    },
    listButton: {
        flex: 7,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: '#000000'
    },
    button: {
        flexBasis: '24.9%',
        height: '20%',
        marginTop: 1,
        backgroundColor: '#a5a5a5',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 50
    },
    key: {
        backgroundColor: '#fe9505',
        color: '#ffffff'
    },
    buttonZero: {
        flexBasis: '49.9%',
        color: 'red'
    },
    btnText: {
        color: '#000000',
        fontSize: 26,
        fontWeight: '400',
        height: '100%',
        verticalAlign: 'middle',
        width: '100%',
        textAlign: 'center'
    },
    btnClicked: {
        backgroundColor: '#ffffff',
        color: '#fe9505'
    }
});

export default Styles