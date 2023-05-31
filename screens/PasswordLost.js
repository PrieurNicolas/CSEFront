import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import Bottom from '../components/Bottom'
import Top from '../components/Top'
import { Link } from 'react-router-native'
import { AuthContext } from '../src/AuthContext'

const PasswordLost = () => {

    const { passwordlost } = useContext(AuthContext);

    const [email, setEmail] = useState();


    return (
        <View style={styles.container}>
            <Top />

            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/cand.png')}></Image></View>

            <View style={styles.conn}>
                <Text style={styles.text}>Problèmes de connexion ?</Text>
                <Text style={styles.text2}>Entrez votre adresse e-mail</Text>


                <View style={styles.wrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder='Adresse e-mail'
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />

                    <Pressable style={styles.btn} onPress={() => {passwordlost(email), setEmail('')}}><Text style={styles.txtbtn}>Envoyer un lien de connexion</Text></Pressable>

                </View>
            </View>
            <View style={styles.conn2}>
                <Link to={'/'}>
                    <Text style={styles.link}>Revenir à l'écran de connexion</Text>
                </Link>
            </View>


            <Bottom />
        </View>
    )
}

export default PasswordLost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
    image: {
        position: "relative",
        height: "100%",
        width: "100%",
        margin: 0,
    },
    imagv: {
        position: "absolute",
        width: "100%",
        height: 250,
        top: 60,
        margin: 0,
    },
    text: {
        fontSize: 40,
        color: "#003147",
        fontWeight: "bold",
    },
    text2: {
        marginTop: 30,
        fontSize: 20,
        color: "#003147",
        fontWeight: "bold",
    },
    wrapper: {
        width: '100%'
    },
    conn: {
        width: '80%',
        backgroundColor: 'whitesmoke',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: "#003147",
        borderWidth: 1,
    },
    conn2: {
        width: '80%',
        backgroundColor: 'whitesmoke',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#003147",
        borderWidth: 1,
        marginTop:5,
    },
    input: {
        marginVertical: 15,
        borderWidth: 1,
        borderColor: "#BBB",
        borderRadius: 5,
        paddingHorizontal: 14,
    },
    link: {
        color: "#003147",
        padding: 15,
    },
    link2: {
        color: "#003147",
        textAlign: 'right',
        marginTop: 20,
        marginBottom: 36,
    },
    txtbtn: {
        color: 'white',
        fontSize: 15,
        fontWeight: "bold",
    },
    btn: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        backgroundColor: '#003147',
        borderRadius: 10,
    },
});