import React, { useContext } from 'react';
import { AppRegistry } from 'react-native';

import MentionsLegales from './MentionsLegales';
import Login from '../screens/Login.js'
import Register from '../screens/Register.js';
import PasswordLost from '../screens/PasswordLost.js';
import Home from '../screens/Home'
import Loading from './Loading'


import { AuthContext } from '../src/AuthContext';
import { NativeRouter, Route, Routes } from 'react-router-native';


const Navigation = () => {
    const { userInfo, splashLoading } = useContext(AuthContext);

    return (
        <NativeRouter>
            <Routes>
                {splashLoading ?
                    (
                        <Route
                            exact path='splashScreen'
                            element={<Loading />}
                            options={{ headerShown: false }}
                        />
                    ) : userInfo.accessToken ? (
                        <Route exact path='/' element={<Home />} />
                    ) : (
                        <>
                            <Route exact path='/' element={<Login />} />
                            <Route exact path='/register' element={<Register />} />
                            <Route exact path='/passwordlost' element={<PasswordLost />} />
                        </>
                    )}
                <Route exact path='/about' element={<MentionsLegales />} />

            </Routes>
        </NativeRouter>
    );
};

export default Navigation;
AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)