import { stackScreenName } from 'components/stackNavigator/configs';
import { RootStackParamList } from 'components/stackNavigator/types';
import React from 'react';
import { LoginScreen, RegisterScreen } from 'screens/authenticate';
import HomeScreen from 'screens/home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={stackScreenName.HOME_SCREEN}>
        <Stack.Screen name={stackScreenName.HOME_SCREEN} component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name={stackScreenName.AUTHENTICATE_LOGIN_SCREEN} component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name={stackScreenName.AUTHENTICATE_REGISTER_SCREEN} component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
