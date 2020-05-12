import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign } from '@expo/vector-icons';


import Home from '../pages/Home';
import NewLend from '../pages/NewLend';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

export default function Tabs(){
    return(
        <Tab.Navigator tabBarOptions={{

            activeBackgroundColor: '#fafafa',
            activeTintColor: 'purple',
            keyboardHidesTabBar: true,

            style: {
                backgroundColor: '#5e5e5e',
            },

            tabStyle: {
                paddingTop: 3,
                bottom: 0,
            },

            labelStyle: {
                fontSize: 16,
                margin: 0,
                top: 2,
            },
        }}>
            <Tab.Screen name="Home" component={Home} options={{ 
                tabBarIcon: () => (
                    <Entypo name="home" size={24} color="#020257"/>
                )
            }}/>
            <Tab.Screen name="Novo" component={NewLend} options={{
                tabBarIcon: () => (
                    <AntDesign name="pluscircle" size={24} padding={10} color="#020257" />
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: () => (
                    <AntDesign name="profile" size={24} color="#020257" />
                )
            }}/>
        </Tab.Navigator>
    );
}