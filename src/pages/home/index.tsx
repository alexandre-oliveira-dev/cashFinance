import {StyleSheet, TouchableOpacity, View} from "react-native";
import Title from "../../components/title";
import SelectMonth from "../../components/selectMonth";
import {useContext} from "react";
import {AuthContext} from "../../router/auth.context";
import {List} from "../../components/list";
import Movimentation from "../../components/movimentation";
import {formater} from "../../common/priceFormater";

function Home() {
  const {setOpen, open, saldo, date} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.boxSaldo}>
        <Title
          text={"Saldo atual"}
          style={{fontSize: 15, fontWeight: "normal", color: "#fff"}}
        ></Title>
        <Title
          text={formater({price: saldo})}
          style={{fontSize: 35, fontWeight: "bold", color: "#fff"}}
        ></Title>
      </View>
      <Movimentation></Movimentation>
      <View
        style={{
          width: "100%",
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "95%",
            backgroundColor: "#612F74",
            height: 40,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            if (open) {
              setOpen(false);
              return;
            }
            setOpen(true);
          }}
        >
          <Title
            style={{color: "#fff", fontSize: 18}}
            text={date}
          ></Title>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 30,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <List></List>
      </View>
      <SelectMonth></SelectMonth>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#121212",
    flex: 1,
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
