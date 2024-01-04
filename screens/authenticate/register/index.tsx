import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { Button, Text } from '@rneui/themed';

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>this is register screen</Text>
      <Button title={'Back'} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RegisterScreen;
