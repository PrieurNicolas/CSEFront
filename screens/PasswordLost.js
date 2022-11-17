import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import Bottom from '../components/Bottom'
import Top from '../components/Top'
import { Link } from 'react-router-native'

const PasswordLost = () => {

    const [email, setEmail] = useState(null);


    return (
        <View style={styles.container}>
            <Top />

            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>

            <View style={styles.conn}>
                <Text style={styles.text}>Mot de passe oublié</Text>
                <Text style={styles.text2}>Entrez votre email</Text>


                <View style={styles.wrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder='Adresse mail'
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />

                    <Pressable style={styles.btn}><Text style={styles.txtbtn}>Valider</Text></Pressable>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>

                        <Link to={'/'}>
                            <Text style={styles.link}>Connexion</Text>
                        </Link>
                    </View>
                </View>
            </View>


            <Bottom />
        </View>
    )
}

export default PasswordLost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    conn:{
        width: '80%',
        backgroundColor:'whitesmoke',
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        borderColor:"#003147",
        borderWidth:1,
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
    },
    link2: {
        color: "#003147",
        textAlign: 'right',
        marginTop: 20,
        marginBottom: 36,
    },
    txtbtn:{
        color:'white',
        fontSize: 15,
        fontWeight: "bold",
    },
    btn:{
        marginHorizontal:'auto',
        alignItems:'center',
        justifyContent:'center',
        height:40,
        width:200,
        backgroundColor:'#003147',
        borderRadius:10,
      },
});