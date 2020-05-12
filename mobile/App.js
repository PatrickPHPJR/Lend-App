import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/routes';
import styles from './src/pages/Register/styles';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

