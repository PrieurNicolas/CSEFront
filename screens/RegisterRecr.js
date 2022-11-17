import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import Bottom from '../components/Bottom'
import Top from '../components/Top'
import { Link } from 'react-router-native'
import { AuthContext } from '../src/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay/lib'

const RegisterRecr = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConf, setPasswordConf] = useState(null);
    const [siret, setSiret] = useState(null);
    const [structureName, setStructureName] = useState(null)
    const [adresse, setAdresse] = useState(null)
    const [codePostal, setCodePostal] = useState(null)
    const [ville, setVille] = useState(null)
    const [tel, setTel] = useState()

    const { isLoading, registerRecr } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <Top />
            <Spinner visible={isLoading} />

            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>

            <View style={styles.conn}>
                <Text style={styles.text}>Inscription</Text>


                <View style={styles.wrapper}>

                    <TextInput
                        style={styles.input}
                        placeholder='N° de siret'
                        value={siret}
                        onChangeText={text => setSiret(text)}
                    />

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

                    <TextInput
                        style={styles.input}
                        placeholder='Confirmation mot de passe'
                        value={passwordConf}
                        onChangeText={text => setPasswordConf(text)}
                        secureTextEntry
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Nom de la structure'
                        value={structureName}
                        onChangeText={text => setStructureName(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Adresse'
                        value={adresse}
                        onChangeText={text => setAdresse(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Code postal'
                        value={codePostal}
                        onChangeText={text => setCodePostal(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Ville'
                        value={ville}
                        onChangeText={text => setVille(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Téléphone'
                        value={tel}
                        onChangeText={text => setTel(text)}
                    />

                    <Pressable style={styles.btn}
                        onPress={() => {
                            registerRecr(email, password);
                        }}><Text style={styles.txtbtn}>Suivant</Text></Pressable>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>

                        <Link to={'/'}>
                            <Text style={styles.link}>Connexion</Text>
                        </Link>
                    </View>
                </View>
            </View>


            <Bottom />
        </View>
    )
}

export default RegisterRecr;

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
        width: '80%'
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
    txtbtn: {
        color: 'white',
        fontSize: 15,
        fontWeight: "bold",
    },
    btn: {
        marginHorizontal: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        backgroundColor: '#003147',
        borderRadius: 10,
    },
});