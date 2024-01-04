import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/core';
import { Button, ButtonProps } from '@rneui/themed';

const GoBackBtn: React.FC<ButtonProps> = ({ ...props }) => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    return navigation.goBack();
  }, [navigation]);

  return <Button {...props} type='outline' title='Back' onPress={handleGoBack} />;
};

export default GoBackBtn;
