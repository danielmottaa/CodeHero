import Home from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}