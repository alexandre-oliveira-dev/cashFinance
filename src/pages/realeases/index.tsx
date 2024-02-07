import {
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Title from "../../components/title";
import {useContext, useState} from "react";
import SelectMonth from "../../components/selectMonth";
import {AuthContext} from "../../router/auth.context";
import MaskInput, {createNumberMask} from "react-native-mask-input";
import ToastComponent from "../../components/toast";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../service/firebaseConnection";
import uuid from "react-native-uuid";

const styles = StyleSheet.create({
  input: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 40,
    padding: 5,
  },
});

const moneyMask = createNumberMask({
  prefix: ["R", "$", " "],
  delimiter: ".",
  separator: ",",
  precision: 2,
});

export default function Realeases() {
  const [realeaseType, setRealeaseType] = useState(false);
  const [desc, setDesc] = useState("");
  const [value, setValue] = useState("");
  const {setOpen, open, data, date, setDate} = useContext(AuthContext);

  async function HandleCreateRealease() {
    if (!desc || !value || !date)
      return ToastComponent(
        {type: "info"},
        {title: "Preencha todos os campos!"}
      );

    /*  console.log({
      uid: uuid.v4(),
      userEmail: data?.email,
      desc,
      value,
      date: dayjs(date).format("DD/MM/YYYY"),
      type: realeaseType ? "saida" : "entrada",
    }); */
    await addDoc(collection(db, "lancamentos"), {
      uid: uuid.v4(),
      userEmail: data?.email,
      desc,
      value: Number(value) / 100,
      date,
      type: realeaseType ? "saida" : "entrada",
    })
      .then(() => {
        setDesc("");
        setValue("");
        setDate("");
        ToastComponent(
          {type: "success"},
          {title: "Lançamento registrado com sucesso!"}
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

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
              backgroundColor: "#f4796b",
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
        <TextInput
          value={desc}
          onChangeText={e => setDesc(e)}
          style={styles.input}
          placeholder="Digite aqui"
        ></TextInput>
        <Title text={"Valor R$"} style={{fontSize: 17, color: "#fff"}}></Title>
        <MaskInput
          value={value}
          mask={moneyMask}
          style={styles.input}
          placeholder={"R$"}
          onChangeText={(_masked, unmasked) => setValue(unmasked)}
        ></MaskInput>
        <Title text={"Data"} style={{fontSize: 17, color: "#fff"}}></Title>
        <TouchableOpacity
          style={{width: "90%", padding: 10, backgroundColor: "#612F74"}}
          onPress={() => {
            if (open) {
              setOpen(false);
              return;
            }
            setOpen(true);
          }}
        >
          <Title
            text={`Escolha a data  ${date}`}
            style={{fontSize: 17, color: "#fff"}}
          ></Title>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "90%",
            padding: 10,
            backgroundColor: "#612F74",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
          onPress={HandleCreateRealease}
        >
          <Title text={"Salvar"} style={{fontSize: 17, color: "#fff"}}></Title>
        </TouchableOpacity>
      </View>
      <SelectMonth></SelectMonth>
    </View>
  );
}
