import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Bottom from '../components/Bottom'
import Top from '../components/Top'
import { Link } from 'react-router-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { AuthContext } from '../src/AuthContext'

const HomeRecr = () => {

    const { logout, isLoading } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Top />
            <Spinner visible={isLoading} />
            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>

            <View style={styles.conn}>

                <Text style={styles.text}>Compte Recruteur</Text>
                
                <View style={styles.card}>
                    <Link to={'/updateprofil'}><Image style={styles.candimg} source={require('../assets/image/recr.png')}></Image></Link>
                    <Text>Modifier mon profil</Text>
                </View>
                <View style={styles.card}>
                    <Link to={'/search'}><Image style={styles.candimg} source={require('../assets/image/cand2.png')}></Image></Link>
                    <Text>Rechercher un candidat</Text>
                </View>
                <Button title='Déconnexion' color='red' onPress={logout} />

            </View>
            <Bottom />
        </View>
    )
}

export default HomeRecr;

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
        marginTop: 20,
        fontSize: 40,
        color: "#003147",
        fontWeight: "bold",
    },
    wrapper: {
        width: '80%'
    },
    input: {
        marginBottom: 12,
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
    card:{
        alignItems:'center',
        marginVertical:25,
    },
    candimg: {
        width: 100,
        height: 100,
    },
});