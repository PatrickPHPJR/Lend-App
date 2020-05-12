import React, { useState } from 'react';
import { View, Text, TextInput, AsyncStorage, Alert, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Entypo } from '@expo/vector-icons'

import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

import api from '../../services/api';

export default function NewLend(){

    const [item_name, setItem_name] = useState('');
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const navigation = useNavigation();

    async function handleSave(){
        if(item_name === '' || name === '' || whatsapp === ''){
            Alert.alert('Erro de validação', 'Existem campos que estão vazios!');
        } 

        if(whatsapp.length >= 0 && whatsapp.length < 11){
            Alert.alert('Whatsapp Inválido', 'O contato do whatsapp dever ter 11 dígitos: DD + Contato');
        }

        else{
            const user_id = await AsyncStorage.getItem('access_id');
            
            const data = {
                item_name,
                name,
                whatsapp,
                user_id
            }
            
            try{
                await api.post('/item', data, {
                    headers: {
                        authorization: user_id
                    }
                });
                
                Alert.alert('Salvo com Successo');
                Keyboard.dismiss();
                navigation.navigate('Home');
            } 
            
            catch(err) {
                Alert.alert('Erro ao salvar', 'Ocorreu um erro ao tentar salvar seu item' + err);
            }
        }
    }

    return(
        <KeyboardAwareScrollView>
                <View style={styles.header}>
                    <Entypo style={styles.headerIcon} name="new-message" size={20} color="#fff"/>
                    <Text style={styles.headerText}>Registrar novo Item</Text>
                </View>
                    
                <View style={styles.newItemContainer}>
                    <Text style={styles.inputText}>Nome do Item: </Text>
                    <TextInput style={styles.itemInput} 
                    onChangeText={(text) => setItem_name(text)} />

                    <Text style={styles.inputText}>Nome da Pessoa:</Text>
                    <TextInput style={styles.itemInput}
                    onChangeText={(text) => setName(text)} />

                    <Text style={styles.inputText}>Numero do Whatsapp:</Text>
                    <TextInput style={styles.itemInput} placeholder="DD + Numero sem espaços"
                    keyboardType="number-pad" 
                    onChangeText={(text) => setWhatsapp(text)} />
                        
                    <TouchableOpacity style={styles.saveButton} 
                    onPress={handleSave}>
                        <Text style={styles.saveButtonText}>Registrar</Text> 
                    </TouchableOpacity>
                </View>
        </KeyboardAwareScrollView>

        
    );
}