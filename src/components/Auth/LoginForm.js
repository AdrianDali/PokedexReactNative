import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import { Formik, useFormik } from 'formik'
//sistema de validacoin
import * as Yup from 'yup'


export default function LoginForm() {
    //controlar datos del formulario
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        //funcion si el formulario es correcto
        onSubmit: (formValue) => {
            console.log("Formulario enviado..");
            console.log(formValue);
        }

    })

    return (
        <View>
            <Text style={styles.title}>Iniciar Sesion</Text>
            <TextInput 
             placeholder='Nombre de usuario' 
             style={styles.input}
             autoCapitalize='none'
             value={formik.values.username}
             onChangeText={(text) => formik.setFieldValue('username',text)}/>
            <TextInput 
             placeholder='contrasena' 
             style={styles.input} 
             autoCapitalize='none'
             secureTextEntry = {true}
             value = {formik.values.password}
             onChangeText={(text) => formik.setFieldValue("password",text)}/>
             <Button title='Entrar' onPress={formik.handleSubmit}/>
             <Text style={styles.error}>{formik.errors.username}</Text>
             <Text style={styles.error}>{formik.errors.password}</Text>
        </View>
    )
}

function initialValues(){
    return{
        username: ""
        ,password: ""
    }
}
function validationSchema(){
    return{
        //string obligatoria
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("la contrasena es obligatoria")
}
}

const styles = StyleSheet.create({
    title:{
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15,

    },
    input:{
        height: 47,
        margin: 12
        ,borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    error:{
        textAlign:"center",
        color:"#f00",
        marginTop: 20
    }
})
