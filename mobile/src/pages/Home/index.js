import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage, FlatList, Alert, Keyboard, Linking,
SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

import { Ionicons, Fontisto, Foundation, FontAwesome, MaterialIcons, Entypo } 
from '@expo/vector-icons';

import styles from './styles';

import api from '../../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home(){

    const [items, setItems] = useState([]);
    const [loading, setloading] = useState(false);
    const navigation = useNavigation();

    async function loadItems(){

        setloading(true);

        const user_id = await AsyncStorage.getItem('access_id');

        try{
            const response = await api.get('/items', {
                headers: {
                    authorization: user_id,
                },
            });

            setItems(response.data);
            setloading(false);
        }

        catch(err){
            Alert.alert('Erro ao carregar items', `Ocorreu algum erro ao tentar carregar seus registros`);
        }
    }

    useEffect(() => {
        loadItems();
    }, []);

    function sendWhatsapp(item, name, whatsapp){
        Linking.openURL(`whatsapp://send?phone=55${whatsapp}&text=Olá ${name}, Eu te emprestei um(a) ${item}.`);
    }

    // para a pagina para atualizar o item
    function navigateToUpdate(item){
        navigation.navigate(`UpdateLend`, { item });
    }

    async function deleteItem(id){

        const user_id = await AsyncStorage.getItem('access_id');

        try{
            await api.delete(`item/${id}`, {
                headers: {
                    authorization: user_id,
                }
            });

            Keyboard.dismiss();
            Alert.alert('Deletado com Sucesso');
        }

        catch(err){
            Keyboard.dismiss();
            Alert.alert(`Erro`, "Algum erro ocorreu ao tentar deletar este item");
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}><Entypo name="pencil" size={20} color="#fff"/> Itens Emprestados</Text>
            </View>

            <FlatList style={styles.itemList}
            data={items}
            keyExtractor={emprestimo => String(emprestimo.item_id)}
            onEndReached={() => loadItems()}
            onEndReachedThreshold={0.3}
            onRefresh={() => loadItems()}
            refreshing={loading}
            renderItem={({ item: emprestimo }) => (

                <View style={styles.itemBox}>
                    <View style={styles.buttonDelete}>
                        <TouchableOpacity onPress={() => deleteItem(emprestimo.item_id)}>
                             <FontAwesome name="trash" size={28} color="red" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.itemName}>Item Emprestado: {emprestimo.item_name}</Text>
                    <Text style={styles.name}><Ionicons name="md-person" size={20}/> - {emprestimo.name}</Text>
                    <Text style={styles.itemData}><Fontisto name="date" size={20}/> - {moment(emprestimo.data).format('LL')}</Text>
                    <Text style={styles.contact}><Foundation name="telephone" size={24}/> - {emprestimo.whatsapp}</Text> 
                    
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonUpdate} 
                        onPress={() => navigateToUpdate(emprestimo)}>
                            <MaterialIcons style={styles.buttonIcon} name="system-update-alt" size={20} color="#fff"/>
                            <Text style={styles.buttonText}>Alterar</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.buttonWhatsapp}
                        onPress={() => sendWhatsapp(emprestimo.item_name, emprestimo.name, emprestimo.whatsapp)}>
                            <FontAwesome style={styles.buttonIcon} name="whatsapp" size={20} color="#fff"/>
                            <Text style={styles.buttonText}>Whatsapp</Text>
                        </TouchableOpacity>
                    </View>
                </View>  
                )}
            />
        </SafeAreaView>
    );
}
