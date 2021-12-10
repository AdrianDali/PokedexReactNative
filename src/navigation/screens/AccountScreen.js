import React from 'react'
import {  Text ,View} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from '../../components/Auth/LoginForm';
import UserData from '../../components/Auth/UserData';
import useAuth from '../../hooks/useAuth';
export default function AccountScreen() {

    const {auth} = useAuth();


    return (
        <SafeAreaView>
            <View>{auth ? <UserData/>: <LoginForm/>}</View>
            
        </SafeAreaView>
    )
}
