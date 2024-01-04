import { defaultStyles } from 'assets/styles';
import { StyleProp, TextStyle } from 'react-native';

export const loginScreenStyles = {
  subTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 14.94,
    color: defaultStyles.greyColor,
    marginTop: 10,
    textAlign: 'center'
  } as StyleProp<TextStyle>
};
