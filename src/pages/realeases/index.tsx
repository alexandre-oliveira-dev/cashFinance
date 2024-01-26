import {
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Title from "../../components/title";
import {useState} from "react";
import {Calendar} from "react-native-calendars";
import SelectMonth from "../../components/selectMonth";

export default function Realeases() {
  const [realeaseType, setRealeaseType] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const styles = StyleSheet.create({
    input: {
      width: "90%",
      backgroundColor: "#fff",
      borderRadius: 5,
      height: 40,
      padding: 5,
    },
  });
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#121212",
        justifyContent: "center",
      }}
    >
      <Title
        text={"O que você precisa lançar hoje?"}
        style={{
          color: "#fff",
          fontSize: 25,
          fontWeight: "bolder",
        }}
      ></Title>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 20,
        }}
      >
        <Switch
          value={realeaseType}
          onValueChange={e => setRealeaseType(e)}
          trackColor={{true: "red", false: "green"}}
        ></Switch>
        {realeaseType ? (
          <Title
            text={"Saida"}
            style={{
              color: "red",
              padding: 5,
              background: "#f4796b",
              fontSize: 15,
              fontWeight: "bold",
              transition: "0.3s ease-in",
              borderRadius: 5,
            }}
          ></Title>
        ) : (
          <Title
            text={"Entrada"}
            style={{
              color: "green",
              padding: 5,
              background: "#0afb3a",
              fontSize: 15,
              fontWeight: "bold",
              transition: "0.3s ease-in",
              borderRadius: 5,
            }}
          ></Title>
        )}
      </View>

      <View
        style={{
          width: "100%",
          padding: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 15,
        }}
      >
        <Title text={"Descrição"} style={{fontSize: 17, color: "#fff"}}></Title>
        <TextInput style={styles.input} placeholder="Digite aqui"></TextInput>
        <Title text={"Valor R$"} style={{fontSize: 17, color: "#fff"}}></Title>
        <TextInput style={styles.input} placeholder="Digite aqui"></TextInput>
        <Title text={"Data"} style={{fontSize: 17, color: "#fff"}}></Title>
        <TouchableOpacity
          style={{width: "90%", padding: 10, backgroundColor: "#612F74"}}
          onPress={() => {
            if (openCalendar) {
              setOpenCalendar(false);
              return;
            }
            setOpenCalendar(true);
          }}
        >
          <Title
            text={"Escolher data"}
            style={{fontSize: 17, color: "#fff"}}
          ></Title>
        </TouchableOpacity>
        <SelectMonth show={openCalendar}></SelectMonth>

        <TouchableOpacity
          style={{
            width: "90%",
            padding: 10,
            backgroundColor: "#612F74",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Title text={"Salvar"} style={{fontSize: 17, color: "#fff"}}></Title>
        </TouchableOpacity>
      </View>
    </View>
  );
}
