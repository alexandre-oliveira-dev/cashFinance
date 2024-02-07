import {collection, onSnapshot} from "firebase/firestore";
import {useContext, useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {db} from "../service/firebaseConnection";
import Title from "./title";
import {formater} from "../common/priceFormater";
import {AuthContext} from "../router/auth.context";

interface DataProps {
  date?: string; // A data original como string
  desc?: string; // A descrição
  type?: string; // O tipo
  uid?: string; // O identificador único
  userEmail?: string; // O e-mail do usuário
  value?: string; // O valor como string (você pode querer mudar para um tipo numérico dependendo da aplicação)
}

function List() {
  const [data, setData] = useState<DataProps[]>([]);
  const {
    data: userEmail,
    setEntrada,
    setSaida,
    setSaldo,
    date,
  } = useContext(AuthContext);
  useEffect(() => {
    async function loadPosts() {
      const unsub = onSnapshot(collection(db, "lancamentos"), snapshot => {
        let listaPost: DataProps[] = [];

        snapshot.forEach(doc => {
          listaPost.push({
            date: String(doc.data().date),
            desc: String(doc.data().desc),
            type: String(doc.data().type),
            value: String(doc.data().value),
            userEmail: String(doc.data().userEmail),
          });
        });
        setData(listaPost);
      });
    }

    loadPosts();
  }, []);


  const entradaValue = data
    .filter(
      item =>
        item?.userEmail === userEmail?.email &&
        item?.type === "entrada" &&
        item.date === date
    )
    .reduce((prev, curr) => prev + (Number(curr.value) || 0), 0);
  setEntrada(entradaValue);
  const saidaValue = data
    .filter(
      item =>
        item?.userEmail === userEmail?.email &&
        item?.type === "saida" &&
        item.date === date
    )
    .reduce((prev, curr) => prev + (Number(curr.value) || 0), 0);
  setSaida(saidaValue);
  const saldo = entradaValue - saidaValue;
  setSaldo(saldo);

  return (
    <FlatList
      data={data.filter(
        item => item?.userEmail === userEmail?.email && item.date === date
      )}
      renderItem={({item}) => ItemList(item)}
    ></FlatList>
  );
}

function ItemList(item: DataProps) {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        padding: 10,
        backgroundColor: item?.type === "entrada" ? "#0afb3a" : "#f4796b",
        justifyContent: "space-around",
        marginTop: 5,
      }}
    >
      <Title
        text={item.desc?.toUpperCase() || ""}
        style={{fontSize: 18, color: "#121212"}}
      ></Title>
      <Title
        text={formater({price: item?.value || 0})}
        style={{fontSize: 18, color: "#121212"}}
      ></Title>
      <Title
        text={item.date || ""}
        style={{fontSize: 18, color: "#121212"}}
      ></Title>
    </View>
  );
}

export {List};
