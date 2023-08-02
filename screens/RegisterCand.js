import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Bottom from '../components/Bottom'
import Top from '../components/Top'
import { AuthContext } from '../src/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import { BASE_URL } from '../src/config'
import axios from 'axios'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Link } from 'react-router-native'
import { RadioButton } from 'react-native-paper'

const RegisterCand = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [dateNaiss, setDateNaiss] = useState(new Date());
    const [tel, setTel] = useState("");
    const [codePostal, setCodePostal] = useState("");
    const [ville, setVille] = useState("");
    const [adresse, setAdresse] = useState("");

    const { isLoading, registerCand, failLog, setFailLog } = useContext(AuthContext);

    useEffect(() => { setFailLog(false) }, [])

    const [textFailCheck, setTextFailCheck] = useState("")
    const [textSuccesCheck, setTextSuccesCheck] = useState("")
    const [failCheck, setFailCheck] = useState(true)

    if (failLog && failCheck) {
        setTextFailCheck('Inscription impossible.')
        setTextSuccesCheck('')
        setFailCheck(false)
    }

    //Selection de diplômes
    const [allDiplomes, setAllDiplomes] = useState([]);
    async function getDiplomes() {
        try {
            const response = await axios.get(`${BASE_URL}/degrees`)
            setAllDiplomes(response.data)
        } catch (e) {
            console.log(`Erreur dans le getDiplome : ${e}`)
        }
    }
    useEffect(() => { getDiplomes() }, [])
    const [diplomes, setDiplomes] = useState([]);
    function pickDiplome(selectedDiplome) {
        if (diplomes.includes(selectedDiplome)) {
            setDiplomes(diplomes.filter(diplome => diplome !== selectedDiplome))
            return;
        }
        setDiplomes(diplomes => diplomes.concat(selectedDiplome));
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
        setEmail('')
        setPassword('')
        setPasswordConf('')
        setNom('')
        setPrenom('')
        setTel('')
        setCodePostal('')
        setVille('')
        setAdresse('')
        setDispos([])
        setDiplomes([])
    }



    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setdate] = useState();

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setDateNaiss(date)
        setdate((date).text)
        hideDatePicker();
    };


    const checkTextInput = () => {
        //Check for Email
        if (!email.trim()) {
            alert('Veuillez entrer un email')
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
        if (!nom.trim()) {
            alert('Veuillez entrer un nom');
            return;
        }
        //Check for adresse
        if (!prenom.trim()) {
            alert('Veuillez entrer un prenom');
            return;
        }
        //Check for postal code
        if (!tel.trim()) {
            !alert('Veuillez entrer un numero de telephone');
            return;
        }
        //Check for ville
        if (!codePostal.trim()) {
            !alert('Veuillez entrer un code postal');
            return;
        }
        //Check for phone
        if (!ville.trim()) {
            !alert('Veuillez entrer une ville');
            return;
        }
        if (!adresse.trim()) {
            !alert('Veuillez entrer une adresse')
        }
        //Check for the Dispo TextInput
        if (!dispos.length == 1) {
            alert('Veuillez entrer une disponibilité');
            return;
        }
        setTextFailCheck('')
        setTextSuccesCheck('Inscription succes')
        clearInput()
        registerCand(email, password, passwordConf, nom, prenom, dateNaiss, tel, codePostal, ville, adresse, dispos, diplomes, checked);
        alert('Success');
    };


    const [checked, setChecked] = useState('animateur');


    return (
        <View style={styles.container}>
            <Top />

            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/cand.png')}></Image></View>

            <View style={styles.containerScroll}>
                <ScrollView style={styles.Scroll}>
                    <Spinner visible={isLoading} />

                    <View style={styles.conn}>
                        <Text style={styles.text}>Créer votre compte</Text>


                        <View style={styles.wrapper}>
                            <Text>Adresse e-mail</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex: nikolatesla@gmail.com'
                                value={email}
                                onChangeText={text => setEmail(text)}
                                maxLength={50}
                                underlineColorAndroid="transparent"
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

                            {/* <Text>Poste recherché</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Poste recherché'
                                value={email}
                                onChangeText=''
                            /> */}

                            <Text>Nom</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex: Tesla'
                                value={nom}
                                onChangeText={text => setNom(text)}
                                maxLength={20}
                            />

                            <Text>Prénom</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex: Nikola'
                                value={prenom}
                                onChangeText={text => setPrenom(text)}
                                maxLength={20}
                            />
                            {/* ======================== */}
                            <Text>Postuler en tant que :</Text>
                            <View style={styles.radiobut}>
                                <View style={styles.radioview}>
                                    <RadioButton
                                        value="animateur"
                                        status={checked === 'animateur' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('animateur')}
                                    />

                                    <Text>Animateur</Text></View>
                                <View style={styles.radioview}>
                                    <RadioButton
                                        value="directeur"
                                        status={checked === 'directeur' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('directeur')}
                                    />

                                    <Text>Directeur</Text></View>
                            </View>

                            {/* ===================================================================================================================== */}

                            <Text>Date de naissance</Text>

                            <Text>{date}</Text>

                            <View>
                                <Button title="Calendrier" onPress={showDatePicker} />
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </View>

                            {/* ===================================================================================================================== */}

                            <Text>Téléphone</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex: 0607060706'
                                value={tel}
                                onChangeText={text => setTel(text)}
                                maxLength={10}
                                keyboardType={"numeric"}
                                inputMode={"numeric"}
                                textContentType={"telephoneNumber"}
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

                            <Text>Adresse</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex: 54 rue Smijan'
                                value={adresse}
                                onChangeText={text => setAdresse(text)}
                                maxLength={100}

                            />

                            {/* <Text>Joindre une photo</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Joindre une photo ????'
                                value={passwordConf}
                                onChangeText=''
                            /> */}

                            <Text>Mes disponibilités</Text>

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

                            <Text>Mes diplômes</Text>

                            <View style={styles.options}>
                                {allDiplomes?.map((option, i) => (
                                    <View key={i} style={styles.diplome}>
                                        <TouchableOpacity style={styles.checkBox}
                                            onPress={() => pickDiplome(option.id)}>
                                            {diplomes.includes(option.id) && (
                                                <View style={styles.check} />)
                                            }
                                        </TouchableOpacity>
                                        <Text style={styles.diplomeName}>{option.degreename}</Text>
                                    </View>
                                ))}
                            </View>
                            <Text style={styles.failCheck}>{textFailCheck}</Text>
                            <Text style={styles.succesCheck}>{textSuccesCheck}</Text>

                            <Text style={styles.conditions}>En cliquant sur S'inscrire, vous acceptez nos <Link><Text style={{color:'blue'}}>Conditions générales.</Text></Link></Text>

                            <Pressable style={styles.btn}
                                onPress={checkTextInput}><Text style={styles.txtbtn}>S'incrire</Text></Pressable>

                            {/* <Button onPress={result} title='Test'></Button> */}
                            <Pressable style={styles.btneffchamps} onPress={clearInput}>
                            <Text style={styles.txtbtneffchamps}>Effacer les champs</Text></Pressable>
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

export default RegisterCand;

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
    radioview: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radiobut: {
        borderWidth: 1,
        borderColor: "#BBB",
        borderRadius: 5,
    },
    conditions:{
        marginVertical:5,
        fontSize:12
    },
    txtbtneffchamps: {
        color: 'white',
        fontSize: 14
    },
    btneffchamps: {
        marginTop:10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 150,
        backgroundColor: '#003147',
        borderRadius: 10,
    }
});