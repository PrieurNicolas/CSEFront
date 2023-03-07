import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Bottom from '../components/Bottom'
import Top from '../components/Top'
import { Link } from 'react-router-native'
import { AuthContext } from '../src/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import { BASE_URL } from '../src/config'
import axios from 'axios'

const RegisterRecr = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [siret, setSiret] = useState('');
    const [structureName, setStructureName] = useState('')
    const [adresse, setAdresse] = useState('')
    const [codePostal, setCodePostal] = useState('')
    const [ville, setVille] = useState('')
    const [tel, setTel] = useState('')

    const { isLoading, registerRecr, failLog, setFailLog } = useContext(AuthContext);

    useEffect(() => {setFailLog(false)})

    const [textFailCheck, setTextFailCheck] = useState("")
    const [textSuccesCheck, setTextSuccesCheck] = useState("")
    const [failCheck, setFailCheck] = useState(true)

    if (failLog && failCheck) {
        setTextFailCheck('Inscription impossible.')
        setTextSuccesCheck('')
        setFailCheck(false)
    }

    //Selection de disponibilités
    const [allDispo, setAllDispo] = useState([])
    async function getDispo() {
        try {
            const response = await axios.get(`${BASE_URL}/periods`)
            setAllDispo(response.data)
        } catch (e) {
            console.log(`Erreur dans le getDispo : ${e}`)
        }
    }
    useEffect(() => { getDispo() }, [])
    const [dispos, setDispos] = useState([]);
    function pickDispo(selectedDispo) {
        if (dispos.includes(selectedDispo)) {
            setDispos(dispos.filter(dispo => dispo !== selectedDispo))
            return;
        }
        setDispos(dispos => dispos.concat(selectedDispo));
    }

    function clearInput() {
        setSiret('')
        setEmail('')
        setPassword('')
        setPasswordConf('')
        setStructureName('')
        setTel('')
        setCodePostal('')
        setVille('')
        setAdresse('')
        setDispos('')
    }

    const checkTextInput = () => {
        //Check for the NbSiret TextInput
        if (!siret.trim()) {
            alert('Veuillez entrer un Numero de Siret')
        }
        //Check for the Name TextInput
        if (!email.trim()) {
            alert('Veuillez entrer un mail');
            return;
        }
        //Check for the Email TextInput
        if (!password.trim()) {
            alert('Veuillez entrer un mot de passe');
            return;
        }
        //Check Double Password
        if (password != passwordConf) {
            alert('Mot de passe diff');
            return;
        }
        //Check for name of the Structure
        if (!structureName.trim()) {
            alert('Veuillez entrer un nom de structure');
            return;
        }
        //Check for adresse
        if (!adresse.trim()) {
            alert('Veuillez entrer une adresse');
            return;
        }
        //Check for postal code
        if (!codePostal.trim()) {
            !alert('Veuillez entrer un code postal');
            return;
        }
        //Check for ville
        if (!ville.trim()) {
            !alert('Veuillez entrer une ville');
            return;
        }
        //Check for phone
        if (!tel.trim()) {
            !alert('Veuillez entrer une numero de telephone');
            return;
        }
        //Check for the Dispo TextInput
        if (!dispos.length == 1) {
            alert('Veuillez entrer une disponibilité');
            return;
        }
        setTextFailCheck('')
        clearInput()
        setTextSuccesCheck('Inscription succes')
        registerRecr(email, password, siret, structureName, adresse, codePostal, ville, tel, dispos),
            alert('Success');
    };


    return (
        <View style={styles.container}>
            <Top />

            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>

            <View style={styles.containerScroll}>
                <ScrollView style={styles.Scroll}>
                    <Spinner visible={isLoading} />

                    <View style={styles.conn}>
                        <Text style={styles.text}>Créer un compte</Text>


                        <View style={styles.wrapper}>

                            <Text>N° de SIRET</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex: 80295478500028'
                                value={siret}
                                onChangeText={text => setSiret(text)}
                                maxLength={14}
                            />

                            <Text>Adresse e-mail</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex: nikolastesla@gmail.com'
                                value={email}
                                onChangeText={text => setEmail(text)}
                                maxLength={50}
                            />
                            <Text>Nouveau mot de passe</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Nouveau mot de passe'
                                value={password}
                                onChangeText={text => setPassword(text)}
                                secureTextEntry
                                maxLength={30}
                            />
                            <Text>Confirmation du mot de passe</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Confirmation du mot de passe'
                                value={passwordConf}
                                onChangeText={text => setPasswordConf(text)}
                                secureTextEntry
                                maxLength={30}
                            />
                            <Text>Nom de la structure</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex: Académie Graz'
                                value={structureName}
                                onChangeText={text => setStructureName(text)}
                                maxLength={50}
                            />
                            <Text>Adresse</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex: 54 rue Smijan'
                                value={adresse}
                                onChangeText={text => setAdresse(text)}
                                maxLength={100}
                            />
                            <Text>Code postal</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex: 62200'
                                value={codePostal}
                                onChangeText={text => setCodePostal(text)}
                                maxLength={5}
                            />
                            <Text>Ville</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex: Boulogne sur mer'
                                value={ville}
                                onChangeText={text => setVille(text)}
                                maxLength={100}
                            />
                            <Text>Téléphone</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex: 0607060706'
                                value={tel}
                                onChangeText={text => setTel(text)}
                                maxLength={10}
                                keyboardType={'number-pad'}
                            />

                            <Text>Périodes de recherche</Text>

                            <View style={styles.options}>
                                {allDispo.map((option, i) => (
                                    <View key={i} style={styles.diplome}>
                                        <TouchableOpacity style={styles.checkBox}
                                            onPress={() => pickDispo(option.id)}>
                                            {dispos.includes(option.id) && (
                                                <View style={styles.check} />)
                                            }
                                        </TouchableOpacity>
                                        <Text style={styles.diplomeName}>{option.periodname}</Text>
                                    </View>
                                ))}
                            </View>
                            <Text style={styles.failCheck}>{textFailCheck}</Text>
                            <Text style={styles.succesCheck}>{textSuccesCheck}</Text>

                            <Pressable style={styles.btn}
                                onPress={checkTextInput}
                            ><Text style={styles.txtbtn}>S'inscrire</Text></Pressable>
                            <Button onPress={clearInput} title='Effacer les champs'></Button>

                        </View>
                    </View>
                    <View style={styles.conn2}>
                        <Link to={'/'}>
                            <Text style={styles.link}>Revenir à l'écran de connexion</Text>
                        </Link>
                    </View>

                </ScrollView>
            </View>
            <Bottom />
        </View>
    )
}

export default RegisterRecr;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    containerScroll: {
        width: '100%',
        height: "80%",
        marginVertical: 80,
    },
    Scroll: {
        borderRadius: 20,
        borderColor: "#003147",
        borderWidth: 1,
        marginHorizontal: 20,
        height: 500,
        backgroundColor: 'whitesmoke',
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
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: "#003147",
    },
    conn2: {
        borderTopWidth: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#003147",
    },
    input: {
        height: 30,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#BBB",
        borderRadius: 5,
        paddingHorizontal: 14,
        placeholderTextColor: 'gray',
    },
    link: {
        color: "#003147",
        padding: 15,
    },
    txtbtn: {
        color: 'white',
        fontSize: 15,
        fontWeight: "bold",
    },
    btn: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        backgroundColor: '#003147',
        borderRadius: 10,
    },
    options: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
    },
    diplome: {
        alignItems: 'center',
        height: 30,
        width: 250,
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
    },
    checkBox: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: "#003147",
        borderRadius: 5,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    diplomeName: {
        textTransform: "uppercase",
        fontSize: 16,
    },
    check: {
        backgroundColor: '#003147',
        borderRadius: 5,
        height: 25,
        width: 25,
    },
    failCheck: {
        color: 'red',
    },
    succesCheck: {
        color: 'green',
    },
});