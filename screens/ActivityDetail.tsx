import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Linking} from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from '../components/Themed';
import React, {  useEffect, useRef, useState } from 'react';
import {Formik} from 'formik'
import * as yup from 'yup'
import { Navigation } from '../types';

interface Activity {
    title:string,
    url:string,
    price:number,
    typePrice:string,
    adress:string,
    validationNumber:number,
    click:number,
    dontKnowNumber:number,
    notValidationNumber:number,
  }

  
export default function ActivityDetail(activity:any){
    const [activityItem, setActivityItem]=useState<Activity>({title:"",url:"",price:0,typePrice:"",adress:"",validationNumber:0,
    click:0,
    dontKnowNumber:0,
    notValidationNumber:0})
useEffect(()=>{
    setActivityItem(activity.route.params.activity)
},)
return(
    <View style={styles.container}>
        <Text style={styles.title}>{activityItem.title}</Text>
        <View style={{flexDirection:"row", backgroundColor:"transparent", marginTop:20}}>
        <View style={{width:30, height:30, borderRadius:90,  backgroundColor:"#1EA21C", alignItems:"center", justifyContent:"center", marginHorizontal:15}}>
              <Text>{activityItem.validationNumber}</Text>
       </View>
       <View style={{width:30, height:30, borderRadius:90,  backgroundColor:"#E9A16D", alignItems:"center", justifyContent:"center", marginHorizontal:15}}>
              <Text>{activityItem.dontKnowNumber}</Text>
       </View>
       <View style={{width:30, height:30, borderRadius:90,  backgroundColor:"#EB4A4A", alignItems:"center", justifyContent:"center", marginHorizontal:15}}>
              <Text>{activityItem.notValidationNumber}</Text>
       </View>
        </View>
        <View style={styles.buttonView}>
     <TouchableOpacity  
     style={styles.button}
      onPress={()=>{if (activityItem.url){Linking.openURL(activityItem.url)}}} >
      <Text style={{color:"white"}}>{activityItem.url}</Text>
     </TouchableOpacity>
   </View>
    </View>
)

}
const styles = StyleSheet.create({
container: {
  backgroundColor:"white",
  flex:  1,
  alignItems: 'center',
},
title: {
    color:"black",
    fontSize: 20,
    fontWeight: 'bold',
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
})