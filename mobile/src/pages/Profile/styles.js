import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: { 
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
    },

    info: {
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 5,
        width: '95%',
        marginTop: 35,
    },

    profile: {
        justifyContent: 'center',
    },

    profileName: {
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 5,
    },

    profileCreated: {
        marginBottom: 5,
    },

    helperContainer: {
        borderColor: 'black',
        borderTopWidth: 1,
        borderStyle: 'solid',
        alignContent: 'center',
    },

    helper: {
        fontSize: 18,
        marginTop: 16,
        fontWeight: 'bold',
    },

    helperText: {
        marginTop: 5,
        marginBottom: 16,
    },

    obs: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },

    obsText: {
        marginTop: 5,
    },

});