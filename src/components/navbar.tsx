import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {IoExitOutline} from "react-icons/io5";
import {signOut} from "firebase/auth";
import {auth} from "../service/firebaseConnection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useContext} from "react";
import {AuthContext} from "../router/auth.context";
import ToastComponent from "./toast";
import {useNavigation} from "@react-navigation/native";
export default function NavBar() {
  const {setHasLogin} = useContext(AuthContext);
  const navigation = useNavigation();

  const buttons = [
    {
      key: "inicio",
      title: "Inicio",
      function: () => navigation.navigate("Home" as never),
      icon: (
        <Image
          source={{
            uri: "https://img.icons8.com/fluency-systems-regular/40/ffffff/home--v1.png",
            width: 40,
            height: 40,
          }}
        ></Image>
      ),
    },
    {
      key: "realeases",
      title: "Lançamentos",
      function: () => navigation.navigate("Realeases" as never),
      icon: (
        <Image
          source={{
            uri: "https://img.icons8.com/fluency-systems-regular/40/ffffff/home--v1.png",
            width: 40,
            height: 40,
          }}
        ></Image>
      ),
    },
    {
      key: "sair",
      title: "",
      function: async () => {
        await signOut(auth)
          .then(async () => {
            await AsyncStorage.removeItem("@currentSession")
              .then(() => {
                ToastComponent({type: "success"}, {title: "Saindo..."});
                setTimeout(() => {
                  setHasLogin(false);
                }, 1500);
              })
              .catch(() => {
                ToastComponent({type: "error"}, {title: "Tente novamente..."});
              });
          })
          .catch(err => console.log(err));
      },
      icon: (
        <Image
          source={{
            uri: "https://img.icons8.com/ios/35/ffffff/exit--v1.png",
            width: 35,
            height: 35,
          }}
        ></Image>
      ),
    },
  ];
  const styles = StyleSheet.create({
    navbar: {
      width: "100%",
      height: 60,
      backgroundColor: "#612F74",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      position: "absolute",
      bottom: 0,
      justifyContent: "space-around",
    },
  });
  return (
    <View style={styles.navbar}>
      {buttons.map(i => {
        return (
          <TouchableOpacity onPress={() => i?.function()} key={i.key}>
            {i.icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
