import React, { useContext } from 'react';
import { AppRegistry } from 'react-native';

import MentionsLegales from './MentionsLegales';
import Login from '../screens/Login.js'
import RegisterLanding from '../screens/RegisterLanding.js'
import RegisterRecr from '../screens/RegisterRecr'
import RegisterCand from '../screens/RegisterCand.js';
import PasswordLost from '../screens/PasswordLost.js';
import Home from '../screens/Home'
import Loading from './Loading'
import UpdateCand from '../screens/UpdateCand';
import Search from '../screens/Search';


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
                        <>
                            <Route exact path='/' element={<Home />} />
                            <Route exact path='/updatecand' element={<UpdateCand />} />
                            <Route exact path='/search' element={<Search />} />
                        </>
                    ) : (
                        <>
                            <Route exact path='/' element={<Login />} />
                            <Route exact path='/registerlanding' element={<RegisterLanding />} />
                            <Route exact path='/registercand' element={<RegisterCand />} />
                            <Route exact path='/registerrecr' element={<RegisterRecr />} />
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