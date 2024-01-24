import React, {useContext, useEffect, useState} from "react";
import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import Title from "../../components/title";
import {doc, collection, addDoc, setDoc} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {useNavigation} from "@react-navigation/native";
import {auth, db} from "../../service/firebaseConnection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthContext} from "../../router/auth.context";
import Toast from "react-native-toast-message";
import ToastComponent from "../../components/toast";

export default function Singin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();
  const {setHasLogin} = useContext(AuthContext);

  async function HandleLoginSession({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    if (!email || !password) {
      ToastComponent({type: "info"}, {title: "Preencha todos os campos!"});
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        async user => {
          await AsyncStorage.setItem(
            "@currentSession",
            JSON.stringify({
              uid: user?.user?.uid,
              email: user?.user.email,
            })
          );
          ToastComponent(
            {type: "success"},
            {title: `Seja bem vido(a) ${user.user.email}`}
          );
          setHasLogin(true);
        }
      );
    } catch (error) {
      ToastComponent(
        {type: "error"},
        {title: "Email ou senha inválidos ou usuário não cadastrado."}
      );
    }
  }
  return (
    <View style={styles.container}>
      <View style={{display: "flex", flexDirection: "row"}}>
        <Title
          text={"Cash"}
          style={{color: "#fff", fontSize: 40, fontWeight: "bold"}}
        ></Title>
        <Title
          text={"Finance"}
          style={{color: "#612F74", fontSize: 40, fontWeight: "bold"}}
        ></Title>
      </View>
      <Title
        text={"Seja bem vindo(a)"}
        style={{color: "#fff", fontSize: 15, fontWeight: "normal"}}
      ></Title>
      <TextInput
        onChangeText={e => {
          setEmail(e);
        }}
        style={styles.input}
        placeholder="Digite seu email"
      ></TextInput>
      <TextInput
        onChangeText={e => {
          setSenha(e);
        }}
        style={styles.input}
        placeholder="Digite sua senha "
      ></TextInput>
      <TouchableOpacity
        onPress={() => HandleLoginSession({email, password: senha})}
        style={styles.btn}
      >
        <Title
          text={"Entrar"}
          style={{color: "#fff", fontSize: 20, fontWeight: "bold"}}
        ></Title>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Singup" as unknown as never)}
      >
        <Title
          text={"Não possui cadastro?, cadastre-se"}
          style={{color: "#fff", fontSize: 15, fontWeight: "normal"}}
        ></Title>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    width: "90%",
    borderRadius: 5,
    color: "grey",
  },
  btn: {
    width: "90%",
    borderRadius: 5,
    backgroundColor: "#612F74",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    color: "#fff",
  },
});
