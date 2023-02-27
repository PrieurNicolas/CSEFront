import { Text, View, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import Bottom from '../components/Bottom'
import Top from '../components/Top'
import Spinner from 'react-native-loading-spinner-overlay'
import { AuthContext } from '../src/AuthContext'

const Home = () => {

    const { logout, isLoading } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Top />
            <Spinner visible={isLoading} />
            <View style={styles.conn}>
                <Text style={styles.text2}>Cette opération a été annulée en raison de restrictions sur ce compte.
                <br/>Contactez le support.</Text>

                <Button title='Retour' color='red' onPress={logout} />

            </View>
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
    text: {
        fontSize: 30,
        color: "#003147",
        fontWeight: "bold",
    },
    text2: {
        fontSize: 20,
        color: "#003147",
        fontWeight: "bold",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
        marginVertical:'5%'
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
    }
});