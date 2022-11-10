import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Top from '../components/Top'

export default class Search extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Top />
                <Text style={styles.text}>Recherche d'offres</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
    },
    text: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
    },
})