import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage, Alert, FlatList } from 'react-native';

import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import moment from 'moment';

import api from '../../services/api';

export default function Profile(){

    const [profile, setProfile] = useState([])

    async function loadProfile(){

        const user_id = await AsyncStorage.getItem('access_id');
        
        try{
            const response = await api.get('/session', {
                headers: {
                    authorization: user_id
                }
            });

            setProfile(response.data);
        }

        catch(err){
            Alert.alert(`Não foi possivel trazer informações do perfil`);
        }
    }

    useEffect(() => {
        loadProfile();
    }, []);

    return(
        <View style={styles.container}>
             
            <FlatList style={styles.info}
            data={profile}
            keyExtractor={user => String(user.user_id)}
            renderItem={({ item: user }) => (
             
                <View style={styles.profile}>
                    <Text style={styles.profileText}><Entypo name="info-with-circle" size={20}/> Perfil</Text>
                    <Text style={styles.profileName}>Nome: {user.name}</Text>
                    <Text style={styles.profileCreated}>Criado em: {moment(user.created_at).format('LL')}</Text>
                
                    <View style={styles.helperContainer}>
                        <Text style={styles.obs}>Importante</Text>
                        <Text style={styles.obsText}>Não forneça seu login de acesso a nínguem.</Text>

                        <Text style={styles.helper}>Helper</Text>
                        <Text style={styles.helperText}>Caso não apareça as mundaças feitas nos seus 
                        registros (alterações, deleções, etc.) deslize o dedo para baixo até aparecer 
                        o icone de carregamento.</Text>
                    </View>
                </View>
                )}
            />
       </View>
    );
}