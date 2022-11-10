import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Top from '../components/Top'

export default class UpdateCand extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Top />
                <View style={styles.form}>
                    <Text style={styles.text}>Modifier votre profil</Text>
                    <TextInput style={styles.input} placeholder='Nom'></TextInput>
                    <TextInput style={styles.input} placeholder='Prénom'></TextInput>
                    <TextInput style={styles.input} placeholder='Date de naissance'></TextInput>
                    <TextInput style={styles.input} placeholder='Téléphone'></TextInput>
                    <TextInput style={styles.input} placeholder='Code Postal'></TextInput>
                    <TextInput style={styles.input} placeholder='Ville'></TextInput>
                    <TextInput style={styles.input} placeholder='Adresse'></TextInput>
                </View>
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
    }
})