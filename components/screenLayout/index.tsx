import { screenLayoutStyles } from 'components/screenLayout/styles';
import React, { useMemo } from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';

const ScreenLayout: React.FC<ViewProps> = ({ style, ...props }) => {
  const styles: StyleProp<ViewStyle> = useMemo(() => {
    let defaultStyles = { ...(screenLayoutStyles as object) };
    if (style && typeof style === 'object') defaultStyles = { ...defaultStyles, ...style };

    return defaultStyles;
  }, [screenLayoutStyles, style]);

  return <View {...props} style={styles} />;
};

export default ScreenLayout;
