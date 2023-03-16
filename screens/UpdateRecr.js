import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Link } from 'react-router-native';
import Bottom from '../components/Bottom';
import Top from '../components/Top'
import { AuthContext } from '../src/AuthContext';
import { BASE_URL } from '../src/config';

const UpdateRecr = () => {

    const { userInfo } = useContext(AuthContext);


    //Selection de candidats
    const [id] = useState(userInfo.idCE)
    const [allCandidates, setAllCandidates] = useState([]);
    const [user, setUser] = useState([]);
    const [diplome, setDiplome] = useState([]);
    const [dispo, setDispo] = useState([])
    const [adresse, setAdresse] = useState([])

    async function getCandidates() {
        try {
            const response = await axios.get(`${BASE_URL}/employers/${id}`)
            setAllCandidates(response.data)
            setUser(response.data.User)
            setDiplome(response.data.User.Degrees)
            setDispo(response.data.User.Period)
            setAdresse(response.data.User.Localisation)
            console.log(response.data)

        } catch (e) {
            console.log(`Erreur de recupération des données : ${e}`)
        }
    }
    useEffect(() => { getCandidates() }, [])


    return (
        <View style={styles.container}>
            <Top />
            <View style={styles.imagv}><Image style={styles.image} source={require('../assets/image/cand.png')}></Image></View>
            <View style={styles.containerScroll}>
                <View style={styles.linkview}>
            <Link style={styles.linkretour} to={'/'}><Image style={styles.imgretour} source={require('../assets/image/retour.png')}></Image></Link>
            <Link style={styles.linkupdate} to={'/'}><Image style={styles.imgretour} source={require('../assets/image/crayon.png')}></Image></Link></View>
                <ScrollView style={styles.Scroll}>
                    <View style={styles.conn}>

                        <Text style={styles.text}>{allCandidates.structurename}</Text>

                        <View style={styles.contactview}>
                            <Text style={styles.contacttext}>Période</Text>
                            {dispo.map((dis, i) => <Text key={i} style={styles.contactinfo}>
                                {dis.periodname}
                            </Text>
                            ).sort()}
                        </View>

                        <View style={styles.contactview}>
                            <Text style={styles.contacttext}>Adresse</Text>
                            <Text style={styles.contactinfo}>Adresse : {adresse.address}</Text>
                            <Text style={styles.contactinfo}>Ville : {adresse.city}</Text>
                            <Text style={styles.contactinfo}>Code postal : {adresse.zipCode}</Text>
                        </View>

                        <View style={styles.contactview}>
                            <Text style={styles.contacttext}>Information</Text>
                            <Text style={styles.contactinfo}>Siret : {allCandidates.siret}</Text>
                            <Text style={styles.contactinfo}>Email : {user.email}</Text>
                            <Text style={styles.contactinfo}>Téléphone : 0{user.phone}</Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
            <Bottom />
        </View>
    )
}
export default UpdateRecr;

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
        flex:2,
        borderRadius: 20,
        borderColor: "#003147",
        borderWidth: 1,
        marginHorizontal: 20,
        height: 500,
        backgroundColor: 'whitesmoke',
        marginTop:-15
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
    linkview:{
        flexDirection:'row',
        justifyContent:'space-between',
        zIndex:1
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
    linkupdate:{
        marginRight:20,
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
    }
});