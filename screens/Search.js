import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Top from '../components/Top'
import { BASE_URL } from '../src/config'
import axios from 'axios'
import Bottom from '../components/Bottom'

const Search = () => {

    //Selection de candidats
    const [allCandidates, setAllCandidates] = useState([]);
    async function getCandidates() {
        try {
            const response = await axios.get(`${BASE_URL}/candidates`)
            setAllCandidates(response.data)
        } catch (e) {
            console.log(`Erreur dans le getDiplome : ${e}`)
        }
    }
    useEffect(() => { getCandidates() }, [])
    const [candidats, setCandidats] = useState([]);
    function pickDiplome(selectedCandidat) {
        if (candidats.includes(selectedCandidat)) {
            setCandidats(candidats.filter(candidat => candidat !== selectedCandidat))
            return;
        }
        setCandidats(candidats => candidats.concat(selectedCandidat));
    }


    return (
        <View style={styles.container}>
            <Top />
            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>

            <View style={styles.containerScroll}>
                <ScrollView style={styles.Scroll}>

                    <View style={styles.conn}>

                        <View style={styles.wrapper}>
                            <Text style={styles.text}>Profils candidats</Text>


                            <Text>Ici vous retrouverez tout les profils des candidats</Text>

                            <View style={styles.options}>
                                {allCandidates?.map((option, i) => (
                                    <View key={i} style={styles.diplome}>
                                        <TouchableOpacity style={styles.checkBox}
                                            onPress={() => pickDiplome(option.id)}>
                                            {candidats.includes(option.id) && (
                                                <View style={styles.check} />)
                                            }
                                        </TouchableOpacity>
                                        <Text style={styles.diplomeName}>{option.firstname} {option.lastname}</Text>
                                    </View>
                                ))}
                            </View>


                        </View>
                    </View>
                </ScrollView>
            </View>
            <Bottom />
        </View>
    )
}
export default Search;

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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: "#003147",
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
        width:'100%'
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
    }
});