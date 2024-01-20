import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/navbar';
import Title from './components/title';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", display: "flex", flexDirection: "row",gap:"10px",alignItems:"center",justifyContent:"center",marginTop:30 }}>
        <Title text={'R$ 2000,00'}  style={{fontSize:35,fontWeight:'bold',color:"#fff"}}></Title>
        <Title text={'01/2024'}  style={{fontSize:15,fontWeight:'normal',color:"#fff"}}></Title>
      </View>
     <NavBar></NavBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor:"#121212"
  },
});
