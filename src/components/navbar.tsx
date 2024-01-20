import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CiHome } from "react-icons/ci";

export default function NavBar() {

    const buttons = [
        {
            key: 'inicio',
            title: 'Inicio',
            function: () => { },
            icon:<CiHome color="#fff" size={30}></CiHome>
        }
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
                        <TouchableOpacity key={i.key}  >{i.icon }</TouchableOpacity>
                    )
                })
            }
        </View>
    )

}