import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, TouchableOpacity, TouchableOpacityBase} from 'react-native';
import { Text, View } from '../components/Themed';
import type { StackNavigationProp } from '@react-navigation/stack';
import {Formik} from 'formik'
import * as yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import { Navigation } from '../types';



const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

interface OwnProps {
  navigation: Navigation
}

export default function LogIn(navigation:OwnProps) {

  //const navigation =useNavigation<StackNavigationProp<any>>()
  return (
    <View style={{backgroundColor:"white", flex:1}}>
    <Text style={styles.title}>Oway</Text>
    <View style={styles.container}>
      <Formik
        validationSchema={loginValidationSchema}
            initialValues={{ email: 'camilledau@gmail.com', password: 'oway123' }}
            onSubmit={() => {
            navigation.navigation.navigate("MyTravel", {isNewUser:false})}}
          >
            {({ handleChange, handleBlur, errors, values, isValid }) => (
              <>
              <View style={{width:"80%", backgroundColor:"white"}}>
              <Text style={styles.subTitle}>Adresse Mail</Text>
                <TextInput
                  placeholderTextColor={"grey"}
                  placeholder="adresse email"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
       </View>
       <View style={{width:"80%", backgroundColor:"white"}}>
              <Text style={styles.subTitle}>Mot de passe</Text>
                <TextInput
                  placeholderTextColor={"grey"}
                  placeholder="mot de passe"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
       }
       </View>
       <View style={styles.buttonView}>
         <TouchableOpacity  
         style={styles.button}
          onPress={()=>{
            navigation.navigation.navigate("MyTravel", {isNewUser:false})}} >
          <Text style={{color:"white"}}> S'inscrire </Text>
         </TouchableOpacity>
       </View>
              </>
            )}
          </Formik>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:"white",
      flex: 1,
      alignItems: 'center',
      marginTop:100,
    },
    title: {
      alignSelf:"center",
        color:"black",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:50,
      },
      textInput: {
        height: 40,
        width: '100%',
        marginVertical: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 90,
        marginBottom:20,
      },
      buttonView:{
        width:"100%",
         margin:20, 
         backgroundColor:"white", 
         alignItems:"center",
         
      },
      button:{
        height:30,
        width:200,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:90,
        },
      subTitle:{
        marginLeft:10,
        color:"black",
      }
  });
  