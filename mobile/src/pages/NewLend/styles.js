import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: '#525252',
        marginBottom: 26,
        padding: 5,
        flexDirection: 'row',
    },

    headerIcon: {
        paddingTop: 10,
        marginTop: 16,
    },

    headerText: {
        color: '#fff',
        fontSize: 16,
        paddingLeft: 5,
        paddingTop: 10,
        marginTop: 15,
        marginLeft: 5,
    },

    newItemContainer: {
        flex: 1,
        backgroundColor: '#ededed',
    },

    itemInput: {
        width: '90%',
        height: 50,
        borderStyle: "solid",
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 16,
        marginLeft: 15,
        paddingLeft: 5,
    },

    inputText:{
        marginLeft: 15,
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },

    saveButton: {
        width: 100,
        height: 40,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: "solid",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: "center",
    },

    saveButtonText: {
        color: '#fff',
    },
});