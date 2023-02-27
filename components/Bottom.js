import { Text, View, StyleSheet, Linking } from 'react-native'
import React from 'react'
import { Link } from 'react-router-native'

export default class Bottom extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Link to={'/about'}>
        <Text style={styles.text}>© 2023 CAB - Mentions légales</Text>
        </Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#003147",
        position:"absolute",
        bottom:0,
      },
    text:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
    }
})