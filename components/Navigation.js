import React, { useContext } from 'react';
import { AppRegistry } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';

import MentionsLegales from './MentionsLegales';
import Login from '../screens/Login.js';
import RegisterLanding from '../screens/RegisterLanding.js';
import PasswordLost from '../screens/PasswordLost.js';
import Loading from './Loading';
import Error from '../screens/Error';

import RegisterRecr from '../screens/RegisterRecr';
import RegisterCand from '../screens/RegisterCand.js';

import HomeRecr from '../screens/HomeRecr';
import HomeCand from '../screens/HomeCand';

import UpdateCand from '../screens/UpdateCand';
import UpdateRecr from '../screens/UpdateRecr';

import SearchCand from '../screens/SearchCand';
import SearchRecr from '../screens/SearchRecr';

import DetailProfilCand from '../screens/DetailProfilCand';
import DetailProfilRecr from '../screens/DetailProfilRecr';

import { AuthContext } from '../src/AuthContext';



const Navigation = () => {
    const { userInfo, splashLoading } = useContext(AuthContext);

    return (
        <NativeRouter>
            <Routes>
                {splashLoading ?
                    (
                        <Route
                            exact path='/'
                            element={<Loading />}
                            options={{ headerShown: false }}
                        />
                    ) : userInfo.accessToken ? (
                        userInfo.userId == 1 && (
                            <>
                                <Route exact path='/' element={<HomeRecr />} />
                                <Route exact path='/updateprofil' element={<UpdateRecr />} />
                                <Route exact path='/search' element={<SearchCand />} />
                                <Route exact path='/detail' element={<DetailProfilCand />} />
                            </>
                        ) ||
                        userInfo.userId == 2 && (
                            <>
                                <Route exact path='/' element={<HomeCand />} />
                                <Route exact path='/updateprofil' element={<UpdateCand />} />
                                <Route exact path='/search' element={<SearchRecr />} />
                                <Route exact path='/detail' element={<DetailProfilRecr />} />
                            </>
                        ) ||
                        (userInfo.userId != 1 && userInfo.userId != 2) && (
                            <>
                            <Route exact path='/' element={<Error />} />
                            </>
                        )

                        // (
                        //     <Route exact path='/' element={<Home />} />
                        // )


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