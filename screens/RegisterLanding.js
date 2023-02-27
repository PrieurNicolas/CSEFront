import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import Bottom from '../components/Bottom'
import Top from '../components/Top'
import { Link } from 'react-router-native'

const RegisterLanding = () => {

    return (
        <View style={styles.container}>
            <Top />

            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>

            <View style={styles.containerScroll}>


                    <View style={styles.conn}>

                        <Text style={styles.text}>Inscription</Text>

                        <View style={styles.card}>
                        <Link to={'/registercand'}><Image style={styles.candimg} source={require('../assets/image/cand2.png')}></Image></Link>
                        <Text style={{textAlign:'center'}}>Candidat</Text>
                        </View>
                        <View style={styles.card}>
                        <Link to={'/registerrecr'}><Image style={styles.candimg} source={require('../assets/image/recr.png')}></Image></Link>
                        <Text style={{textAlign:'center'}}>Recruteur</Text>
                        </View>
                    </View>

            </View>
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
    candimg: {
        width: 100,
        height: 100,
    },
    conn: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: "#003147",
    },
    containerScroll: {
        width: '80%',
        borderRadius: 20,
        borderColor: "#003147",
        borderWidth: 1,
        marginHorizontal: 20,
        backgroundColor: 'whitesmoke',
    },
    card:{
        marginVertical:25,
    }
});