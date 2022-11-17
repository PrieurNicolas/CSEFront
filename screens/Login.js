import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import Bottom from '../components/Bottom'
import Top from '../components/Top'
import { Link } from 'react-router-native'
import { AuthContext } from '../src/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay'

const Login = () => {

  const [email, setEmail] = useState("pierru@gmail.com");
  const [password, setPassword] = useState("hash");

  const { isLoading, loginCand, failLog } = useContext(AuthContext);

  const [textFailCheck, setTextFailCheck] = useState("")
  const [failCheck, setFailCheck] = useState(true)

  if (failLog && failCheck) {
    setTextFailCheck('Email ou mot de passe incorrect')
    setFailCheck(false)
  }

  return (
    <View style={styles.container}>
      <Top />
      <Spinner visible={isLoading} />
      <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>

      <View style={styles.conn}>
        <Text style={styles.text}>Connexion</Text>


        <View style={styles.wrapper}>
          <TextInput
            style={styles.input}
            placeholder='Adresse mail'
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder='Mot de passe'
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />

          <Text style={styles.failCheck}>{textFailCheck}</Text>

          <Link to={'/passwordlost'}>
            <Text style={styles.link2}>Mot de passe oublié ?</Text>
          </Link>

          <Pressable style={styles.btn} onPress={() => { loginCand(email, password) }} ><Text style={styles.txtbtn}>Connexion</Text></Pressable>

          <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
            <Text>pas de compte ? </Text>

            <Link to={'/registerlanding'}>
              <Text style={styles.link}>Inscription</Text>
            </Link>
          </View>
        </View>
      </View>


      <Bottom />
    </View>
  )
}

export default Login;

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
  wrapper: {
    width: '100%',
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
  },
  failCheck: {
    textAlign: 'center',
    color: "red"
  },
  btn:{
    marginHorizontal:'auto',
    alignItems:'center',
    justifyContent:'center',
    height:40,
    width:200,
    backgroundColor:'#003147',
    borderRadius:10,
  },
  txtbtn:{
    color:'white',
    fontSize: 15,
    fontWeight: "bold",
  }
});