import { defaultStyles } from 'assets/styles';
import StackNavigator from 'components/stackNavigator';
import { View } from 'react-native';

import { createTheme, ThemeProvider } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: defaultStyles.primaryColor
  }
});

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: defaultStyles.whiteColor }}>
      <ThemeProvider theme={theme}>
        <StackNavigator />
      </ThemeProvider>
    </View>
  );
}
