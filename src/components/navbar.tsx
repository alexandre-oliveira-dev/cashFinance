import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CiHome } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { auth } from "../service/firebaseConnection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { AuthContext } from "../router/auth.context";
import ToastComponent from "./toast";
export default function NavBar() {

    const { setHasLogin } = useContext(AuthContext)
    
    const buttons = [
        {
            key: 'inicio',
            title: 'Inicio',
            function: () => {},
            icon:<CiHome color="#fff" size={30}></CiHome>
        },
        {
            key: 'sair',
            title: '',
            function: async () => {
                await signOut(auth).then(async() => {
                    await AsyncStorage.removeItem('@currentSession').then(() => {
                        ToastComponent({type:'success'},{title:'Saindo...'})
                        setTimeout(() => {
                            setHasLogin(false)
                        }, 1500);
                    }).catch(() => {
                        ToastComponent({type:'error'},{title:'Tente novamente...'})
                    })
                   
                }).catch((err)=> console.log(err))
             },
            icon:<IoExitOutline color="#fff" size={30}> </IoExitOutline>
        },
    ]
    const styles = StyleSheet.create({
        navbar: {
            width: "100%",
            height: 60,
            backgroundColor: "#612F74",
            display: 'flex',
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            position: "absolute",
            bottom:0,
        }
    })
    return (
        <View style={styles.navbar}>
            {
                buttons.map((i) => {
                    return (
                        <TouchableOpacity onPress={() => i?.function()} key={i.key}  >{i.icon }</TouchableOpacity>
                    )
                })
            }
        </View>
    )

}