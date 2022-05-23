import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, TouchableOpacity, TouchableOpacityBase} from 'react-native';
import { Text, View } from '../components/Themed';
import type { StackNavigationProp } from '@react-navigation/stack';
import {Formik} from 'formik'
import * as yup from 'yup'
import { useNavigation } from '@react-navigation/native';



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

export default function Register() {

  const navigation =useNavigation<StackNavigationProp<any>>()
  return (
    <View style={{backgroundColor:"white", flex:1}}>
    <Text style={styles.title}>Oway</Text>
    <View style={styles.container}>
      <Formik
        validationSchema={loginValidationSchema}
            initialValues={{ pseudo: '',email: '', password: '', confirmedPassword:'' }}
            onSubmit={() => {
            navigation.navigate("MyTravel", {isNewUser:true})}}
          >
            {({ handleChange, handleBlur, errors, values, isValid }) => (
              <>
               <View style={{width:"80%", backgroundColor:"white", marginTop:5}}>
              <Text style={styles.subTitle}>Pseudo</Text>
                <TextInput
                  placeholder="pseudo"
                  placeholderTextColor={"grey"}
                  style={styles.textInput}
                  onChangeText={handleChange('pseudo')}
                  onBlur={handleBlur('pseudo')}
                  value={values.pseudo}
                />
       </View>
                 <View style={{width:"80%", backgroundColor:"white", marginTop:5}}>
              <Text style={styles.subTitle}>Adresse Mail</Text>
                <TextInput
                  placeholder="email"
                  placeholderTextColor={"grey"}
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
       <View style={{width:"80%", backgroundColor:"white", marginTop:5}}>
              <Text style={styles.subTitle}>Mot de passe</Text>
                <TextInput
                  placeholder="password"
                  placeholderTextColor={"grey"}
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
       <View style={{width:"80%", backgroundColor:"white", marginTop:5}}>
       <Text style={styles.subTitle}>Confirmation du mot de passe</Text>
       <TextInput
                  placeholder="confirmed password"
                  placeholderTextColor={"grey"}
                  style={styles.textInput}
                  onChangeText={handleChange('confirmedPassword')}
                  onBlur={handleBlur('confirmedaPassword')}
                  value={values.confirmedPassword}
                  secureTextEntry
                />
                {errors.password &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
       }
       </View>
       <View style={styles.buttonView}>
         <TouchableOpacity  
         style={styles.button}
          onPress={()=>navigation.navigate("MyTravel", {isNewUser:true})} >
          <Text> S'inscrire </Text>
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
      marginBottom:0,
    },
    buttonView:{
      width:"100%",
       margin:20,
       backgroundColor:"white", 
       alignItems:"center",
    },
    button:{
      height:40,
      width:200,
      backgroundColor:"black",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:5,
      },
    subTitle:{
      marginLeft:10,
      color:"black",
    }
});