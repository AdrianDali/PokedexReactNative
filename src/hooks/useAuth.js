import React ,{useContext}from 'react'
import { View, Text } from 'react-native'
import { AuthContext, AuthProvider } from '../context/AuthContext'

export default () => useContext(AuthContext);

