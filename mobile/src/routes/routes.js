import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

import Register from '../pages/Register';
import Login from '../pages/Login';
import UpdateLend from '../pages/UpdateLend';
import TabNavigator from '../routes/userRoutes';

export default function Routes(){
    return(

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={TabNavigator}/>
            <Stack.Screen name="NewLend" component={TabNavigator}/>
            <Stack.Screen name="UpdateLend" component={UpdateLend}/>
            <Stack.Screen name="Profile" component={TabNavigator}/>
        </Stack.Navigator>

    );
}

