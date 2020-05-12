import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, AsyncStorage,
Alert, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import appIcon from '../../assets/app-icon.png';

import api from '../../services/api';

export default function Register(){

    const [name, setName] = useState('');

    const navigation = useNavigation();

    // verificar se o usuario deste dispositivo ja tem um cadastro
    const getData = async () => {
        try {
            const access_id = await AsyncStorage.getItem('access_id');
            console.log(access_id);

            if(access_id !== null) {
                navigation.navigate('Home');
            }
        }

        catch(e) {
            return
        }
    }

    useEffect(() => {
        getData();
    });

    async function handleRegister(){ 

        const data = {
            name
        };

        try{
            const response = await api.post('register', data);
            Alert.alert('Sucesso',`Esse é o seu login de acesso ${response.data.user_id} caso instale o aplicativo novamente`);
            AsyncStorage.setItem('access_id', response.data.user_id);
            Keyboard.dismiss();
            navigation.navigate('Home');
        }

        catch(err){
            Alert.alert('Erro ao salvar',`Algum erro correu durante o registro`);
            Keyboard.dismiss();
        }
    }

    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding": "height" }
        style={styles.container}>
            <View style={styles.header}>
                <Image source={appIcon} style={styles.headerImage}/>
                <Text style={styles.headerText}>Bem - Vindo ao Lend App</Text>
            </View>

            <View style={styles.register}>
                <TextInput style={styles.registerInput} placeholder="Digite seu Nome"
                value={name}
                onChangeText={text => setName(text)}/>

               <TouchableOpacity style={styles.button}
               onPress={handleRegister}>
                   <Text style={styles.buttonText}>Salvar</Text>   
                </TouchableOpacity>
            </View>

            <View style={styles.registerFooter}>
                <TouchableOpacity style={styles.footerButton} 
                onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.footerText}>Ja tenho um Usuário salvo</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}