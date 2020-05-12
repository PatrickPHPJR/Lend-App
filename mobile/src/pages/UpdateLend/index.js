import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Alert, TextInput, AsyncStorage, Keyboard } from 'react-native';

import styles from './styles';
import { Entypo, AntDesign } from '@expo/vector-icons';

import api from '../../services/api';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function UpdateLend(){

    const route = useRoute();
    const navigation = useNavigation();
    // recuperar o id do item passado por parametro
    const item = route.params.item;

    const [item_name, setItem_name] = useState(`${item.item_name}`);
    const [name, setName] = useState(`${item.name}`);
    const [whatsapp, setWhatsapp] = useState(`${item.whatsapp}`);

    function navigateToBack(){
        navigation.goBack();
    }

    async function handleUpdate(){
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
                await api.put(`/item/${item.item_id}`, data, {
                    headers: {
                        authorization: user_id
                    }
                });
                
                Alert.alert('Alterado', "Alterações feitas com sucesso");
                Keyboard.dismiss();
                navigation.navigate('Home');
            } 
            
            catch(err) {
                Alert.alert('Erro ao salvar', 'Ocorreu um erro ao tentar salvar suas alterações');
            }
        }
    }

    return(
        <KeyboardAwareScrollView>
                <View style={styles.header}>
                    <Entypo style={styles.headerIcon} name="new-message" size={20} color="#fff"/>
                    <Text style={styles.headerText}>Atualizar Item</Text>
                </View>
                    
                <View style={styles.updateItemContainer}>
                    <TouchableOpacity style={styles.backButton}>
                        <AntDesign name="arrowleft" size={26} color="red" onPress={navigateToBack}/>
                    </TouchableOpacity>

                    <Text style={styles.inputText}>Nome do Item: </Text>
                    <TextInput style={styles.itemInput} 
                    value={item_name}
                    onChangeText={(text) => setItem_name(text)} />

                    <Text style={styles.inputText}>Nome da Pessoa:</Text>
                    <TextInput style={styles.itemInput}
                    value={name}
                    onChangeText={(text) => setName(text)} />

                    <Text style={styles.inputText}>Numero do Whatsapp:</Text>
                    <TextInput style={styles.itemInput} placeholder="DD + Numero sem espaços"
                    keyboardType="number-pad" 
                    value={whatsapp}
                    onChangeText={(text) => setWhatsapp(text)} />
                        
                    <TouchableOpacity style={styles.updateButton} 
                    onPress={handleUpdate}>
                        <Text style={styles.updateButtonText}>Salvar Alterações</Text> 
                    </TouchableOpacity>
                </View>
        </KeyboardAwareScrollView>
    );
}
