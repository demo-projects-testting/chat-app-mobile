import { stackScreenName } from 'components/stackNavigator/configs';
import { RootStackParamList } from 'components/stackNavigator/types';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToScreen = useCallback(
    (screenName: keyof RootStackParamList) => {
      navigation.navigate(screenName);
    },
    [stackScreenName, navigation]
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Text h1>This is a Text. Fira Code</Text>
      <Button title={'Login'} onPress={() => navigateToScreen(stackScreenName.AUTHENTICATE_LOGIN_SCREEN)} />
      <Button title={'Register'} onPress={() => navigateToScreen(stackScreenName.AUTHENTICATE_REGISTER_SCREEN)} />
    </View>
  );
};

export default HomeScreen;
