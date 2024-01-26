import {StyleSheet, Text, TextInput, View} from "react-native";
import Title from "./title";

export default function Movimentation() {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      height: 100,
      marginTop: 100,
      padding: 10,
      gap: 10,
    },
    box: {
      flex: 1,
      height: 100,
      backgroundColor: "#e5e5e5",
      borderRadius: 10,
    },
    textSaldo: {
      fontSize: 20,
      fontWeight: "400",
      margin: 10,
      fontFamily: "montserrat, sans-serif",
    },
  });
  return (
    <View style={{width: "100%"}}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Title
            text={"Entradas"}
            style={{
              color: "#612F74",
              margin: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          ></Title>
          <Text style={styles.textSaldo}>R$ 6.000,00</Text>
        </View>
        <View style={styles.box}>
          <Title
            text={"Saídas"}
            style={{
              color: "#bb0b0b",
              margin: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          ></Title>

          <Text style={styles.textSaldo}>R$ 2.000,00</Text>
        </View>
      </View>
    </View>
  );
}
