import {StyleSheet, TouchableOpacity, View} from "react-native";
import Movimentation from "../../components/movimentation";
import NavBar from "../../components/navbar";
import Title from "../../components/title";
import SelectMonth from "../../components/selectMonth";
import dayjs from "dayjs";
import {useState} from "react";

function Home() {
  const [open, setOpen] = useState(false);
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
            text={dayjs().format("MMMM")}
          ></Title>
        </TouchableOpacity>
      </View>
      {open && <SelectMonth show={open} ></SelectMonth>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#121212",
    flex:1
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
