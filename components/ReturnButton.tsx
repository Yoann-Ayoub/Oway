import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from '../components/Themed';



export default function ReturnButton(props: any) {
    const navigation =useNavigation<StackNavigationProp<any>>()
  return (
    <View style={styles.buttonView}>
              <TouchableOpacity
              style={styles.button}
               onPress={()=>{
                 navigation.navigate("MyTravel", {isNewUser:false})}} >
               <Text style={{color:"white"}}> Retour </Text>
              </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:"white",
      flex: 1,
      alignItems: 'right',
      marginTop:100,
    },
      buttonView:{
        width:"100%",
         margin:20,
         paddingLeft:15,
         backgroundColor:"white",
         alignItems:"right",
      },
      button:{
        height:40,
        width:100,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        }
  });