import React from 'react';
import { LoginScreen, RegisterScreen } from 'screens/authenticate';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { stackScreenName } from './configs';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={stackScreenName.AUTHENTICATE_LOGIN_SCREEN} component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name={stackScreenName.AUTHENTICATE_REGISTER_SCREEN} component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
