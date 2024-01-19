import { Button, StyleSheet, Text, View } from "react-native";


export default function NavBar() {

    const buttons = [
        {
            key: 'inicio',
            title: 'Inicio',
            function: () => { }
            
        }
    ]
    const styles = StyleSheet.create({
        navbar: {
            width: "100%",
            height: 60,
            backgroundColor: "green",
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
                        <Button key={i.key} title={i.title}></Button>
                    )
                })
            }
        </View>
    )

}