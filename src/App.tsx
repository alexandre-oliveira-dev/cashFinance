import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Minhas Finanças</Text>
      </View>
     <NavBar></NavBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    
  },
});
