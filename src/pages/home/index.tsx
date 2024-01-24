import {StyleSheet, View} from "react-native";
import Movimentation from "../../components/movimentation";
import NavBar from "../../components/navbar";
import Title from "../../components/title";

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.boxSaldo}>
        <Title
          text={"Saldo atual"}
          style={{fontSize: 15, fontWeight: "normal", color: "#fff"}}
        ></Title>
        <Title
          text={"R$ 4000,00"}
          style={{fontSize: 35, fontWeight: "bold", color: "#fff"}}
        ></Title>
      </View>
      <Movimentation></Movimentation>
      <NavBar></NavBar>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#121212",
  },
  boxSaldo: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});

export default Home;
