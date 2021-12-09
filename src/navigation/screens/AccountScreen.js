import React from 'react'
import {  Text ,View} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from '../../components/Auth/LoginForm';
import UserData from '../../components/Auth/UserData';
export default function AccountScreen() {

    const auth = null;


    return (
        <SafeAreaView>
            <View>{auth ? <UserData/>: <LoginForm/>}</View>
            
        </SafeAreaView>
    )
}
