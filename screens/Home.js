import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Bottom from '../components/Bottom'
import Top from '../components/Top'
import { Link } from 'react-router-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { AuthContext } from '../src/AuthContext'

const Home = () => {

    const { logout, isLoading } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Top />
            <Spinner visible={isLoading} />
            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>
            <Text style={styles.text}>Profil Candidat</Text>

            <Link style={{ marginVertical: 20 }} to={'/updatecand'}><Text>Modifier mon profil</Text></Link>

            <Link style={{ marginVertical: 20 }} to={'/search'}><Text>Rechercher une offre</Text></Link>

            <Button title='Logout' color='red' onPress={logout} />

            <Bottom />
        </View>
    )
}

export default Home;

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
        marginTop: 50,
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
    }
});