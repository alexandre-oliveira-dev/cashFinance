import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Title from "../../components/title";
import firebase from '../../service/firebaseConnection'
import { useNavigation } from "@react-navigation/native";


export default function Singin() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigation = useNavigation()

    async function HandleLoginSession({ email, password }: { email: string, password: string }) {
    if(!email || !password)return;
    try {
        console.log('clico');

        const userCredential = await firebase?.auth().signInWithEmailAndPassword(email, password);

        if (userCredential && userCredential.user) {
            const uid = userCredential.user.uid;
            console.log(uid);

            await firebase.firestore().collection('currentSession').doc(uid).set({ uid: uid })
                .then(() => {
                
                    console.log('deu certo');
                })
            .catch(()=> console.log('errado'))
        } else {
            console.log('Usuário não encontrado');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
    }
}
    return (
        <View style={styles.container}>
            <View style={{display:'flex',flexDirection:"row"}}>

            <Title text={'Cash'} style={{ color: '#fff', fontSize: 40, fontWeight: 'bold' }}></Title>
            <Title text={'Finance'} style={{ color: '#612F74', fontSize: 40, fontWeight: 'bold' }}></Title>
            </View>
            <Title text={'Seja bem vindo(a)'} style={{ color: '#fff', fontSize: 15, fontWeight: 'normal' }}></Title>
            <TextInput onChangeText={(e) => {setEmail(e)}} style={styles.input} placeholder="Digite seu email"></TextInput>
            <TextInput onChangeText={(e) => {setSenha(e)}}  style={styles.input} placeholder="Digite sua senha "></TextInput>
            <TouchableOpacity
            onPress={()=> HandleLoginSession({email,password:senha})}
                style={styles.btn}>
                 <Title text={'Entrar'} style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}></Title>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Signup" as unknown as never)}>
             <Title text={'Não possui cadastro?, cadastre-se'} style={{ color: '#fff', fontSize: 15, fontWeight: 'normal' }}></Title>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#121212',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:"center",
        flex: 1,
        gap:10
    },
    input: {
        backgroundColor:"#fff",
        padding: 15,
        width: '90%',
        borderRadius: 5,
        color: 'grey',
        
    },
    btn: {
        width: '90%',
        borderRadius:5,
        backgroundColor: "#612F74",
        height: 50,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        fontSize: 20,
        color:'#fff'
        
    }
})