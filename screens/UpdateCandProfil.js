import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Pressable, Button } from 'react-native'
import { Link } from 'react-router-native';
import Bottom from '../components/Bottom';
import Top from '../components/Top'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AuthContext } from '../src/AuthContext';
import { BASE_URL } from '../src/config';

const UpdateCandProfil = () => {

    const { userInfo, UpdatedCand, failLog, setFailLog } = useContext(AuthContext);
    const [id] = useState(userInfo.idCE)

    const [email, setEmail] = useState('');
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [dateNaiss, setDateNaiss] = useState(new Date());
    const [tel, setTel] = useState("");
    const [codePostal, setCodePostal] = useState("");
    const [ville, setVille] = useState("");
    const [adresse, setAdresse] = useState("");

    async function getCandidates() {
        try {
            const response = await axios.get(`${BASE_URL}/candidates/${id}`)
            setEmail(response.data.User.email)
            setPrenom(response.data.firstname)
            setNom(response.data.lastname)
            setAdresse(response.data.User.Localisation.address)
            setCodePostal(response.data.User.Localisation.zipCode)
            setVille(response.data.User.Localisation.city)
            setTel(response.data.User.phone)
            setDateNaiss(response.data.birthday)
            // setDispos(response.data.User.Period)
            response.data.User.Period.map((option) => {
                setDispos(dispos => dispos.concat(option.id))
            })
            response.data.User.Degree.map((option) => {
                setDiplomes(dispos => dispos.concat(option.id))
            })
        } catch (e) {
            console.log(`Erreur de recupération des données : ${e}`)
        }
    }
    useEffect(() => { getCandidates() }, [])



    useEffect(() => { setFailLog(false) })

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


    return (
        <View style={styles.container}>
            <Top />
            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>
            <View style={styles.containerScroll}>
                <View style={styles.linkview}>
                    <Link style={styles.linkretour} to={'/updateprofil'}><Image style={styles.imgretour} source={require('../assets/image/retour.png')}></Image></Link></View>
                <ScrollView style={styles.Scroll}>
                    <View style={styles.conn}>

                        <Text style={styles.text}>Modifier le profil</Text>

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
                                maxLength={9}
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

                            <Pressable style={styles.btn}
                                onPress={() => { UpdatedCand(email, nom, prenom, dateNaiss, tel, codePostal, ville, adresse, dispos, diplomes) }}
                            ><Text style={styles.txtbtn}>Enregistrer</Text></Pressable>

                        </View>
                    </View>
                </ScrollView>
            </View>
            <Bottom />
        </View>
    )
}
export default UpdateCandProfil;

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
        marginTop: -15
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
        fontSize: 20,
        color: "#003147",
        fontWeight: "bold",
        textTransform: 'uppercase'
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
    imgretour: {
        width: 20,
        height: 20,
    },
    linkview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1
    },
    linkretour: {
        marginLeft: 20,
        borderRadius: 20,
        borderColor: "#003147",
        borderWidth: 1,
        backgroundColor: 'whitesmoke',
        padding: 10,
        width: 30,
        height: 30,
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkupdate: {
        marginRight: 20,
        borderRadius: 20,
        borderColor: "#003147",
        borderWidth: 1,
        backgroundColor: 'whitesmoke',
        padding: 10,
        width: 30,
        height: 30,
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
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
});