import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import Bottom from '../components/Bottom'
import Top from '../components/Top'
import { Link } from 'react-router-native'
import { AuthContext } from '../src/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay'
import { useEffect } from 'react'

const Login = () => {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const loginState = {
    email: '',
    password: ''
  }

  const [data, setData] = useState(loginState)

  function handleChange(event, name){
    const { value } = event.target
    setData({ ...data, [name]: value })
  }

  const { isLoading, loginCand, failLog, setFailLog } = useContext(AuthContext);

  useEffect(() => { setFailLog(false) }, [])


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
        <Text style={styles.text}>Se connecter</Text>


        <View style={styles.wrapper}>
          <TextInput
            name='email'
            style={styles.input}
            placeholder='Adresse e-mail'
            onChange={(event) => {handleChange(event, 'email')}}
            value={data.email}
          />

          <TextInput
            style={styles.input}
            placeholder='Mot de passe'
            onChange={(event) => {handleChange(event, 'password')}}
            name='password'
            secureTextEntry
            value={data.password}
          />

          <Text style={styles.failCheck}>{textFailCheck}</Text>

          <Link to={'/passwordlost'}>
            <Text style={styles.link2}>Mot de passe oublié ?</Text>
          </Link>

          <Pressable style={styles.btn} onPress={() => { loginCand(data), setData(loginState) }} ><Text style={styles.txtbtn}>Se connecter</Text></Pressable>

        </View>
      </View>
      <View style={styles.conn2}>
        <Link style={styles.link3} to={'/registerlanding'}>
          <Text style={styles.link}>Vous n'avez pas de compte ? Inscrivez-vous</Text>
        </Link>
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
  conn2: {
    marginTop: 5,
    width: '80%',
    backgroundColor: 'whitesmoke',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 21,
  },
  failCheck: {
    textAlign: 'center',
    color: "red"
  },
  btn: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 200,
    backgroundColor: '#003147',
    borderRadius: 10,
    marginTop: 15,
  },
  txtbtn: {
    color: 'white',
    fontSize: 15,
    fontWeight: "bold",
  },
  link3: {
    padding: 15,
  }
});