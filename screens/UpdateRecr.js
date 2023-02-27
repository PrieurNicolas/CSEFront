import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Bottom from '../components/Bottom';
import Top from '../components/Top'

export default class UpdateRecr extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Top />

                <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>

                <View style={styles.form}>
                    <Text style={styles.text}>Modifier votre profil recruteur</Text>
                    <TextInput style={styles.input} placeholder='Nom'></TextInput>
                    <TextInput style={styles.input} placeholder='Prénom'></TextInput>
                    <TextInput style={styles.input} placeholder='Date de naissance'></TextInput>
                    <TextInput style={styles.input} placeholder='Téléphone'></TextInput>
                    <TextInput style={styles.input} placeholder='Code Postal'></TextInput>
                    <TextInput style={styles.input} placeholder='Ville'></TextInput>
                    <TextInput style={styles.input} placeholder='Adresse'></TextInput>
                </View>
                <Bottom/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
    text: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#BBB",
        borderRadius: 5,
        paddingHorizontal: 14,
        width: "80%"
    },
    form:{
        width: '80%',
        backgroundColor: 'whitesmoke',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: "#003147",
        borderWidth: 1,
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
})