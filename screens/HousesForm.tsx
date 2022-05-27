import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, TextInput} from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from '../components/Themed';
import React, { useRef, useState } from 'react';
import {Formik} from 'formik'
import * as yup from 'yup'
import { Navigation } from '../types';
import RNPickerSelect from "react-native-picker-select";

const loginValidationSchema = yup.object().shape({
    titre: yup
    .string()
      .required('Le titre est obligatoire'),
    url: yup
      .string()
      .required('L url est obligatoire'),
    adress: yup
      .string()
      .required('PL adresse est obligatoire'),
    price: yup
      .number()
      .required('Le prix ets obligatoire'),
  })
  interface OwnProps {
    navigation: Navigation
  }
export default function ActivitiesForm(navigation:OwnProps) {
  const [titre, setTitre]=useState("")
  const[url, setUrl]=useState("")
  const [adress, setAdress]=useState("")
  const [price, setPrice]=useState("")
  const [description, setDescription]=useState("")
  const [typePrice,setTypePrice]=useState("Total")

  const titreRef=useRef()
  const urlRef=useRef()
  const adressRef=useRef()
  const priceRef=useRef()
  const descriptionRef=useRef()
    //const navigation =useNavigation<StackNavigationProp<any>>()
    return (
        <View style={{backgroundColor:"white", flex:1}}>
    <Text style={styles.title}>Nouveau Logement</Text>
    <View style={styles.container}>
      <Formik
        validationSchema={loginValidationSchema}
            initialValues={{ titre: '',url: '', adress: '', price:"" }}
            onSubmit={(values) => {
            navigation.navigation.navigate("Activities", {activities:values})}}
          >
            {({ handleChange, handleBlur, errors, values, isValid }) => (
              <>
               <View style={{width:"80%", backgroundColor:"white", marginTop:5}}>
              <Text style={styles.subTitle}>Titre</Text>
                <TextInput
                  placeholder="titre"
                  placeholderTextColor={"grey"}
                  style={styles.textInput}
                  onChangeText={(t)=>setTitre(t)}
                  returnKeyType="next"
                  onSubmitEditing={() => urlRef.current.focus()}
                  value={titre}
                />
                {errors.titre &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.titre}</Text>
       }
       </View>
       <View style={{width:"80%", backgroundColor:"white", marginTop:5}}>
              <Text style={styles.subTitle}>URL</Text>
                <TextInput
                  placeholder="lien url"
                  placeholderTextColor={"grey"}
                  style={styles.textInput}
                  onChangeText={(u)=>setUrl(u)}
                  value={url}
                  returnKeyType="next"
                  onSubmitEditing={() => adressRef.current.focus()}
                  ref={urlRef}
                />
                {errors.url &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.url}</Text>
       }
       </View>
                 <View style={{width:"80%", backgroundColor:"white", marginTop:5}}>
              <Text style={styles.subTitle}>Adresse</Text>
                <TextInput
                  placeholder="adresse"
                  placeholderTextColor={"grey"}
                  style={styles.textInput}
                onChangeText={(a)=>setAdress(a)}
                  value={adress}
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() => priceRef.current.focus()}
                  ref={adressRef}
                />
                {errors.adress &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.adress}</Text>
       }
       </View>
       <View style={{width:"80%", backgroundColor:"white", marginTop:5}}>
       <Text style={styles.subTitle}>Prix</Text>
       <View style={{alignItems:"center",flexDirection:"row", height: 40,width: '100%',marginVertical: 10,backgroundColor: 'white',borderColor: 'gray',borderWidth: 2,borderRadius: 90,marginBottom:0}}>
       <TextInput
                  placeholder="prix "
                  placeholderTextColor={"grey"}
                  style={{flex:5}}
                  onChangeText={(p)=>setPrice(p)}
                  value={price}
                  ref={priceRef}
                />
                {errors.price &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.price}</Text>
       }
       <View style={{flex:3, height:"80%", borderLeftWidth:1, backgroundColor:"transparent", alignItems:"center", justifyContent:"center"}}>
       <RNPickerSelect
                 onValueChange={(value) => setTypePrice(value)}
                 items={[
                     { label: "Total", value: "total" },
                     { label: "Par personne", value: "personne" },
                 ]}
             />
       </View>
       </View>
       </View>
       <View style={{width:"80%", backgroundColor:"white", marginTop:5}}>
       <Text style={styles.subTitle}>Description</Text>
       <TextInput
                  placeholder="prix "
                  placeholderTextColor={"grey"}
                  style={styles.textInput}
                  onChangeText={(d)=>setDescription(d)}
                  value={description}
                  ref={descriptionRef}
                />
       </View>
       <View style={styles.buttonView}>
         <TouchableOpacity  
         style={styles.button}
          onPress={()=>{
            const house={title:titre, url:url, price:price,  typePrice:typePrice, adress:adress, description:description, validationNumber:0,click: 0, dontKnowNumber:0,notValidationNumber:0}
            navigation.navigation.navigate("Houses", {activity:house})}} >
          <Text style={{color:"white"}}> Ajouter ce Logement </Text>
         </TouchableOpacity>
       </View>
              </>
            )}
          </Formik>
    </View>
    </View>

    )
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
