import {StyleSheet, Text, View} from "react-native";
import Title from "./title";
import {useContext} from "react";
import {AuthContext} from "../router/auth.context";
import {formater} from "../common/priceFormater";

export default function Movimentation() {
  const {saida, entrada} = useContext(AuthContext);
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
          <Text style={styles.textSaldo}>{formater({price: entrada})}</Text>
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

          <Text style={styles.textSaldo}>{formater({price: saida})}</Text>
        </View>
      </View>
    </View>
  );
}
