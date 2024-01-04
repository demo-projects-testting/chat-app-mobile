import { inputCompStyles } from 'components/inputComp/styles';
import React from 'react';

import { Input, InputProps } from '@rneui/themed';

const InputComp: React.FC<InputProps> = ({ ...props }) => {
  return (
    <Input
      {...props}
      containerStyle={inputCompStyles.containerStyle}
      labelStyle={inputCompStyles.labelStyle}
      inputContainerStyle={inputCompStyles.inputContainerStyle}
      inputStyle={inputCompStyles.inputStyle}
      leftIconContainerStyle={inputCompStyles.leftIconContainerStyle}
      errorStyle={inputCompStyles.errorStyle}
    />
  );
};

export default InputComp;
