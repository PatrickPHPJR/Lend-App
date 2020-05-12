import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f7f7",
        justifyContent: 'center',
    },

    header:{
        paddingTop: 45,
        alignItems: 'center',
    },

    headerImage: {
        width: 120,
        height: 120,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 10
    },

    login: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    loginInput: {
        width: '60%',
        height: 45,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 5
    },

    button: {
        width: 90,
        height: 45,
        backgroundColor: '#04cf18',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: "solid",
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
    },

    loginFooter: {
        flex: 3,
        alignItems: 'center'
    },

    footerButton: {
        backgroundColor: '#100059',
        padding: 10,
    },

    footerText: {
        color: '#fff',
    },
});