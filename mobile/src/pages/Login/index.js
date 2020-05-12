import React, { useState, useEffect } from 'react';
import { View, Text, Image, KeyboardAvoidingView, TextInput, AsyncStorage, 
Keyboard, Alert } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import appIcon from '../../assets/app-icon.png';
import styles from './styles';

import api from '../../services/api';

export default function Login(){

    const [user_id, setUser_Id] = useState('');

    const navigation = useNavigation();

    // verificar se o usuario deste dispositivo ja tem um cadastro
    const getData = async () => {
        try {
            const access_id = await AsyncStorage.getItem('access_id');

            // se o usuario ja estiver logado, ele manda para tela inicial
            if(access_id !== null) {
                navigation.navigate('Home');
            }
        }

        catch(e) {

        }
    }

    useEffect(() => {
        getData();
    }, []);

    async function handleLogin(){

        const data = {
            user_id
        };

        try{
            const response = await api.post('login', data);
            await AsyncStorage.setItem('access_id', response.data.user_id);
            Keyboard.dismiss();
            navigation.navigate('Home');
        }

        catch(err){
            Alert.alert('Erro de autenticação', `Login de acesso incorreto`);
            Keyboard.dismiss();
        }
    }

    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding": "height" }
        style={styles.container}>
            <View style={styles.header}>
                <Image source={appIcon} style={styles.headerImage}/>
                <Text style={styles.headerText}>Logar com usuário existente</Text>
            </View>

            <View style={styles.login}>
                <TextInput style={styles.loginInput} placeholder="Digite seu Login de acesso"
                value={user_id}
                onChangeText={text => setUser_Id(text)}/>

               <TouchableOpacity style={styles.button} onPress={handleLogin}>
                   <Text style={styles.buttonText}>Logar</Text>   
                </TouchableOpacity>
            </View>

            <View style={styles.loginFooter}>
                <TouchableOpacity style={styles.footerButton} 
                onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.footerText}>Não tenho Usuário salvo</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}