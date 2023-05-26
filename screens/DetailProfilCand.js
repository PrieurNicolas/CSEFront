import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Top from '../components/Top'
import { BASE_URL } from '../src/config'
import axios from 'axios'
import Bottom from '../components/Bottom'
import { IdContext } from '../src/Id';
import { Link } from 'react-router-native'

const DetailProfilCand = () => {

    const { id } = useContext(IdContext);

    //Selection de candidats
    const [allCandidates, setAllCandidates] = useState([]);
    const [user, setUser] = useState([]);
    const [diplome, setDiplome] = useState([]);
    const [dispo, setDispo] = useState([])
    const [adresse, setAdresse] = useState([])

    async function getCandidates() {
        try {
            const response = await axios.get(`${BASE_URL}/candidates/${id}`)
            console.log(response.data)
            setAllCandidates(response.data)
            setUser(response.data.User)
            setDiplome(response.data.User.Degree)
            setDispo(response.data.User.Period)
            setAdresse(response.data.User.Localisation)
        } catch (e) {
            console.log(`Erreur dans les details : ${e}`)
        }
    }
    useEffect(() => { getCandidates() }, [])

    

    return (
        <View style={styles.container}>
            <Top />
            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>
            <View style={styles.containerScroll}>
            <Link style={styles.linkretour} to={'/search'}><Image style={styles.imgretour} source={require('../assets/image/retour.png')}></Image></Link>
                <ScrollView style={styles.Scroll}>
                    <View style={styles.conn}>

                        <Text style={styles.text}>{allCandidates.firstname} {allCandidates.lastname}</Text>

                        <View style={styles.contactview}>
                            <Text style={styles.contacttext}>Mes diplômes</Text>
                            {diplome.map((dip, i) => <Text key={i} style={styles.contactinfo}>
                                {dip.degreename}
                            </Text>
                            )}
                        </View>

                        <View style={styles.contactview}>
                            <Text style={styles.contacttext}>Mes disponibilités</Text>
                            {dispo.map((dis, i) => <Text key={i} style={styles.contactinfo}>
                                {dis.periodname}
                            </Text>
                            ).sort()}
                        </View>

                        <View style={styles.contactview}>
                            <Text style={styles.contacttext}>Secteur</Text>
                            <Text style={styles.contactinfo}>Ville : {adresse.city}</Text>
                            <Text style={styles.contactinfo}>Code postal : {adresse.zipCode}</Text>
                        </View>

                        <View style={styles.contactview}>
                            <Text style={styles.contacttext}>Me contacter</Text>
                            <Text style={styles.contactinfo}>Email : {user.email}</Text>
                            <Text style={styles.contactinfo}>Téléphone : 0{user.phone}</Text>
                        </View>

                        <View style={styles.contactview}>
                            <Text style={styles.contacttext}>Infos</Text>
                            <Text style={styles.contactinfo}>Date de naissance : {new Date(allCandidates.birthday).toLocaleDateString()}</Text>
                        </View>

                        <View style={styles.contactview}>
                        <Pressable style={styles.btn} ><Text style={styles.txtbtn}>Me contacter</Text></Pressable>
                        </View>

                    </View>
                </ScrollView>
            </View>
            <Bottom />
        </View>
    )
}
export default DetailProfilCand;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    containerScroll: {
        width: '100%',
        height: "75%",
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
        fontSize: 35,
        color: "#003147",
        fontWeight: "bold",
        textTransform: 'uppercase'
    },
    conn: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: "#003147",
    },
    contactview: {
        marginTop:10,
        width: '100%',
        borderTopWidth: 1,
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    contacttext: {
        marginTop:5,
        fontSize: 23,
        color: "#003147",
        fontWeight: "bold",
        textTransform: 'uppercase'
    },
    contactinfo:{
        marginTop:5,
        fontSize: 15,
        color: "#003147",
        fontWeight: "bold",
    },
    imgretour:{
        width:20,
        height:20,
    },
    linkretour:{
        marginLeft:20,
        borderRadius: 20,
        borderColor: "#003147",
        borderWidth: 1,
        backgroundColor: 'whitesmoke',
        padding:10,
        width:30,
        height:30,
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
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
});