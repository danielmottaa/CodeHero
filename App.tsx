import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes/';



export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}