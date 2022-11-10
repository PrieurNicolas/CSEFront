import { Text, View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Bottom from '../components/Bottom'
import Top from '../components/Top'
import { Link } from 'react-router-native'

const RegisterLanding = () => {

    return (
        <View style={styles.container}>
            <Top />

            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>

            <Text style={styles.text}>Inscription</Text>

            <Link style={{ marginVertical: 20 }} to={'/registercand'}><Text>Candidat</Text></Link>

            <Link style={{ marginVertical: 20 }} to={'/registerrecr'}><Text>Recruteur</Text></Link>

            <Bottom />
        </View>
    )
}

export default RegisterLanding;

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

});