import React from 'react';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ededed',
    },

    header: {
        backgroundColor: '#525252',
    },

    headerText: {
        padding: 5,
        color: '#fff',
        fontSize: 16,
        marginTop: 24,
    },

    itemList: {
        flex: 1, 
        backgroundColor: '#ededed',
        padding: 15,
    },

    itemBox: {
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: "solid",
        padding: 5,
        marginBottom: 24,
    },

    itemName: {
        fontWeight: 'bold',
        fontSize: 14,
        padding: 5
    },

    name: {
        fontSize: 14,
        padding: 5,
    },

    itemData: {
        fontSize: 14,
        padding: 5
    },

    contact: {
        fontSize: 14,
        padding: 5
    },

    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    buttonUpdate: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#3e77b0',
        width: 120,
        height: 40,
        marginTop: 10,
    },

    buttonWhatsapp: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'green',
        width: 120,
        height: 40,
        marginTop: 10,
    },

    buttonIcon: {
        paddingLeft: 5,
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        padding: 10,
    },

    buttonDelete: {
        position: 'absolute',
        width: 40,
        height: 40,
        right: 0,
        marginRight: 5,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },

    deleteIcon: {
        marginRight: 5,
        paddingTop: 5,
        zIndex: 0
    },

});