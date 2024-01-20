import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/router';
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#121212'} barStyle={'dark-content'}></StatusBar>
      <Routes></Routes>
     </NavigationContainer>
  );
}

