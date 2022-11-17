import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Bottom from '../components/Bottom'
import Top from '../components/Top'
import { AuthContext } from '../src/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import { BASE_URL } from '../src/config'
import axios from 'axios'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const RegisterCand = () => {

    const [email, setEmail] = useState('nicolasprfieur22@gmail.com');
    const [password, setPassword] = useState('chips');
    const [passwordConf, setPasswordConf] = useState('chips');
    const [nom, setNom] = useState("efedfe");
    const [prenom, setPrenom] = useState("nufefell");
    const [dateNaiss, setDateNaiss] = useState(new Date());
    const [tel, setTel] = useState("0665432369");
    const [codePostal, setCodePostal] = useState("62200");
    const [ville, setVille] = useState("Boulogne sur mer");
    const [adresse, setAdresse] = useState("42 rue de wissant");

    const { isLoading, registerCand } = useContext(AuthContext);

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

    function result() {
        console.log(email, password, nom, prenom, dateNaiss, tel, codePostal, ville, adresse, dispos, diplomes)
    }



    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };


    
    return (
        <View style={styles.container}>
            <Top />

            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>

            <View style={styles.containerScroll}>
                <ScrollView style={styles.Scroll}>
                    <Spinner visible={isLoading} />

                    <View style={styles.conn}>
                        <Text style={styles.text}>Inscription</Text>


                        <View style={styles.wrapper}>
                            <Text>Adresse mail*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Adresse mail'
                                value={email}
                                onChangeText={text => setEmail(text)}
                                maxLength={50}
                                underlineColorAndroid="transparent"
                            />

                            <Text>Mot de passe*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Mot de passe'
                                value={password}
                                onChangeText={text => setPassword(text)}
                                secureTextEntry
                            />

                            <Text>Confirmation du mot de passe*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Confirmation du mot de passe'
                                value={passwordConf}
                                onChangeText={text => setPasswordConf(text)}
                                secureTextEntry
                            />

                            {/* <Text>Poste recherché</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Poste recherché'
                                value={email}
                                onChangeText=''
                            /> */}

                            <Text>Nom*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Nom'
                                value={nom}
                                onChangeText={text => setNom(text)}

                            />

                            <Text>Prénom*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Prénom'
                                value={prenom}
                                onChangeText={text => setPrenom(text)}

                            />
                            {/* ===================================================================================================================== */}
                            <Text>Date de naissance*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Date de naissance'
                                value={dateNaiss}
                                onChangeText={text => setDateNaiss}
                            />


<View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>








                            {/* ===================================================================================================================== */}
                            <Text>Téléphone*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Téléphone'
                                value={tel}
                                onChangeText={text => setTel}

                            />

                            <Text>Code postal*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Code postal'
                                value={codePostal}
                                onChangeText={text => setCodePostal}
                            />

                            <Text>Ville*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ville'
                                value={ville}
                                onChangeText={text => setVille}
                            />

                            <Text>Adresse*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Adresse'
                                value={adresse}
                                onChangeText={text => setAdresse}

                            />

                            {/* <Text>Joindre une photo</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Joindre une photo ????'
                                value={passwordConf}
                                onChangeText=''
                            /> */}

                            <Text>Mes disponibilités*</Text>

                            <View style={styles.options}>
                                {allDispo.map(option => (
                                    <View key={option} style={styles.diplome}>
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
                                {allDiplomes?.map(option => (
                                    <View key={option} style={styles.diplome}>
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


                            <Pressable style={styles.btn}
                                onPress={() => {
                                    registerCand(email, password, nom, prenom, dateNaiss, tel, codePostal, ville, adresse, dispos, diplomes);
                                }}><Text style={styles.txtbtn}>Terminer</Text></Pressable>

                            <Button onPress={result} title='Test'></Button>
                        </View>
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
        borderRadius: 100,
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
        borderRadius: 100,
        height: 25,
        width: 25,
    },
});