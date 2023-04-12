import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "./config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);
    const [failLog, setFailLog] = useState(false);

    const registerCand = (email, password, passwordConf, nom, prenom, dateNaiss, tel, codePostal, ville, adresse, dispos, diplomes) => {
        setIsLoading(true);

        let objDispo = dispos?.map(((period) => {
            return { "id": parseInt(period) }
        }))
        let objDiplome = diplomes?.map(((degree) => {
            return { "id": parseInt(degree) }
        }))

        axios.post(`${BASE_URL}/candidates`, {
            "candidate": {
                "firstname": prenom,
                "lastname": nom,
                "birthday": dateNaiss,
                "wantToBe": "animateur"
            },
            "users": {
                "password": password,
                "passwordconf": password,
                "email": email,
                "phone": tel,
                "isActif": true
            },
            "localisation": {
                "address": adresse,
                "zipCode": codePostal,
                "city": ville
            },
            "periods": objDispo
            ,
            "degrees": objDiplome
            // email, password, nom, prenom, dateNaiss, tel, codePostal, ville, adresse, dispos, diplomes

        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            console.log(userInfo);
            setFailLog(false)
        }).catch(e => {
            console.log(`Register Candidates error : ${e}`);
            setIsLoading(false);
            setFailLog(true);
        });
    };

    const loginCand = (email, password) => {
        setIsLoading(true);

        axios.post(`${BASE_URL}/auth/login`, {
            email,
            password,
        }).then(res => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            setFailLog(false)
        }).catch(e => {
            console.log(`Login error : ${e}`);
            setFailLog(true);
            setIsLoading(false);
        })
    };

    const logout = () => {
        setIsLoading(true);
        try {
            AsyncStorage.removeItem('userInfo');
            setUserInfo({});
            setIsLoading(false);
        } catch (e) {
            console.log(`Logout error ${e}`);
            setIsLoading(false);
        }

    };

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserInfo(userInfo);
            }

            setSplashLoading(false);
        } catch (e) {
            setSplashLoading(false)
            console.log(`is logged in error ${e}`)
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    const registerRecr = (email, password, siret, structureName, adresse, codePostal, ville, tel, dispos) => {
        setIsLoading(true);

        let objDispo = dispos?.map(((period) => {
            return { "id": parseInt(period) }
        }))

        axios.post(`${BASE_URL}/employers`,
            {
                "employer": {
                    "siret": siret,
                    "structurename": structureName,
                },
                "users": {
                    "password": password,
                    "passwordconf": password,
                    "email": email,
                    "phone": tel,
                    "isActif": false,
                },
                "localisation": {
                    "address": adresse,
                    "zipCode": codePostal,
                    "city": ville
                },
                "periods": objDispo
            }
        ).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            console.log(userInfo);
            setFailLog(false)
        }).catch(e => {
            console.log(`Register Recruteur error : ${e}`);
            setIsLoading(false);
            setFailLog(true)
        });
    };

    const UpdatedRecr = (email, siret, structureName, adresse, codePostal, ville, tel, dispos) => {
        setIsLoading(true);

        let objDispo = dispos?.map(((period) => {
            return { "id": parseInt(period) }
        }))

        axios.put(`${BASE_URL}/employers/form/${userInfo.idCE}`,
            {
                "employer": {
                    "siret": siret,
                    "structurename": structureName
                },
                "users": {
                    "email": email,
                    "phone": tel
                },
                "localisation": {
                    "address": adresse,
                    "zipCode": codePostal,
                    "city": ville
                },
                "periods": objDispo
            }
        ).then(res => {
            console.log(res.data)
            setIsLoading(false);
            setFailLog(false)
        }).catch(e => {
            console.log(`Updating Recruteur error : ${e}`);
            setIsLoading(false);
            setFailLog(true)
        });
    };

    const UpdatedCand = (email, nom, prenom, dateNaiss, tel, codePostal, ville, adresse, dispos, diplomes) => {
        setIsLoading(true);

        let objDispo = dispos?.map(((period) => {
            return { "id": parseInt(period) }
        }))
        let objDiplome = diplomes?.map(((degree) => {
            return { "id": parseInt(degree) }
        }))

        axios.put(`${BASE_URL}/candidates/form/${userInfo.idCE}`,
            {
                "candidate": {
                    "firstname": prenom,
                    "lastname": nom,
                    "birthday": dateNaiss,
                    "wantToBe": "animateur"
                },
                "users": {
                    "email": email,
                    "phone": tel
                },
                "localisation": {
                    "address": adresse,
                    "zipCode": codePostal,
                    "city": ville
                },
                "periods": objDispo
                ,
                "degrees": objDiplome
            }
        ).then(res => {
            console.log(res.data)
            setIsLoading(false);
            setFailLog(false)
        }).catch(e => {
            console.log(`Updating Candidat error : ${e}`);
            setIsLoading(false);
            setFailLog(true)
        });
    };


    const passwordlost = (email) => {
        setIsLoading(true);

        axios.post(`${BASE_URL}/auth/forgetPassword`,
            {
                    "email": email
            }
        ).then(res => {
            console.log(res.data)
            setIsLoading(false);
            setFailLog(false)
        }).catch(e => {
            console.log(`Password Lost error : ${e}`);
            setIsLoading(false);
            setFailLog(true)
        });
    };


    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                splashLoading,
                failLog,
                setFailLog,
                registerCand,
                registerRecr,
                loginCand,
                logout,
                UpdatedRecr,
                UpdatedCand,
                passwordlost
            }}>
            {children}
        </AuthContext.Provider>
    )
}