import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Linking} from 'react-native';
import { Text, View } from '../components/Themed';
import React, { useEffect, useRef, useState } from 'react';

import { Navigation } from '../types';

interface House {
    title:string,
    url:string,
    price:number,
    typePrice:string,
    adress:string,
    description:string, 
    location:string,
    validationNumber:number,
    click:number,
    dontKnowNumber:number,
    notValidationNumber:number,
}

export default function HouseDetail(house:any){
    const [houseItem, setHouseItem]=useState<House>({title:"",url:"",price:0,typePrice:"",adress:"",description:"", location:"",validationNumber:0,
        click:0,
        dontKnowNumber:0,
        notValidationNumber:0})
    useEffect(()=>{
        setHouseItem(house.route.params.house)
    },)
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{houseItem.title}</Text>
            <View style={{flexDirection:"row", backgroundColor:"transparent", marginTop:20}}>
            <View style={{width:30, height:30, borderRadius:90,  backgroundColor:"#1EA21C", alignItems:"center", justifyContent:"center", marginHorizontal:15}}>
                  <Text>{houseItem.validationNumber}</Text>
           </View>
           <View style={{width:30, height:30, borderRadius:90,  backgroundColor:"#E9A16D", alignItems:"center", justifyContent:"center", marginHorizontal:15}}>
                  <Text>{houseItem.dontKnowNumber}</Text>
           </View>
           <View style={{width:30, height:30, borderRadius:90,  backgroundColor:"#EB4A4A", alignItems:"center", justifyContent:"center", marginHorizontal:15}}>
                  <Text>{houseItem.notValidationNumber}</Text>
           </View>
            </View>
            <View style={styles.buttonView}>
         <TouchableOpacity  
         style={styles.button}
          onPress={()=>{if (houseItem.url){Linking.openURL(houseItem.url)}}} >
          <Text style={{color:"white"}}>{houseItem.url}</Text>
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