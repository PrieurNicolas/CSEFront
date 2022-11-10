import { Text, View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'react-router-native';

export default class Bottom extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imagv}>
                    <Link to={'/'}><Image style={styles.image} source={require('../assets/image/agglo-boulon.png')}></Image></Link>
                </View>

                <View style={styles.log}>
                    <Link to={'/'}><View style={styles.cand}><FontAwesome5 name="user-alt" size={25} color="#003147" /></View></Link>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex:10,
        flexDirection: "row",
        width: "100%",
        height: 60,
        backgroundColor: "#003147",
        position: "absolute",
        top: 0,
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 1,
    },
    imagv: {
        left:20,
        justifyContent: "center",
        alignItems: 'center',
        height: 45,
        width: 45,
        borderRadius: 5,
        backgroundColor: "white"
    },
    cand:{
        justifyContent: "center",
        alignItems: 'center',
        width:40,
        height:40,
        backgroundColor:"white",
        borderRadius: 20,
        marginHorizontal:10,
    },
    recr:{
        justifyContent: "center",
        alignItems: 'center',
        width:40,
        height:40,
        backgroundColor:"white",
        borderRadius: 5,
        marginHorizontal:10,
    },
    log:{
        flexDirection:"row",
        position:"absolute",
        right:20,
        justifyContent:'space-between'
    }
})