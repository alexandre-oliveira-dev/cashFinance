import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/router';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/router/auth.context';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
 
<AuthProvider>
    <NavigationContainer>
      <StatusBar backgroundColor={'#121212'} barStyle={'dark-content'}></StatusBar>
      <Routes></Routes>
      <Toast></Toast>
     </NavigationContainer>
</AuthProvider>
  );
}

