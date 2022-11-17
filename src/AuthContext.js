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

    const registerCand = (email, password, nom, prenom, dateNaiss, tel, codePostal, ville, adresse, dispos, diplomes) => {
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
                "birthday": dateNaiss
            },
            "users": {
                "password": password,
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
        }).catch(e => {
            console.log(`Register error : ${e}`);
            setIsLoading(false);
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

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                splashLoading,
                failLog,
                registerCand,
                loginCand,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    )
}