import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default class Starts extends React.Component {

    render() {      
    return (
        <View style={styles.container}>
          <Text style={{color:"white", fontSize:30}}>Centre social eclaté</Text>
          <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/agglo-boulon.png')}></Image></View>
          <StatusBar style="auto" />
        </View>
      );
    }
}
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#003147",
      },
      image:{
        width:200,
        height:200,
      },
      imagv:{
        justifyContent:"center",
        alignItems:'center',
        height:250,
        width:250,
        borderRadius:20,
        backgroundColor:"white"
      },
    });