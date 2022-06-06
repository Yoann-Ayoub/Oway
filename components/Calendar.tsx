import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import Toolbar from "react-multi-date-picker/plugins/toolbar"
import colors from "react-multi-date-picker/plugins/colors"
import { Text, View } from "./Themed";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

function Validate() {
  const navigation =useNavigation<StackNavigationProp<any>>()
  
  return (
    <View style={styles.buttonView}>
      <TouchableOpacity  
        style={styles.button}
        onPress={()=>navigation.navigate("Date2")} >
        <Text style={{color:"white"}}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Calendar() {
  const [value, setValue] = useState(); //new Date()
  const [props, setProps] = useState({
    value: value,
    onChange: setValue,
    multiple: true,
    offsetY: -100,
    plugins: [
        // <Toolbar 
        //   position="bottom" 
        //   sort={["deselect", "close"]} 
        //   names={{deselect: "supprimer", close: "fermer", today: "aujourd'hui"}}
        // />,
        <Validate
          position="bottom"/>,
        colors({
          position: "top",
          colors: ["green", "yellow"],
        })
      ],
  });

  return <DatePicker
    {...props}
    onPropsChange={setProps}
    />;
}

const styles = StyleSheet.create({
    buttonView:{
      width:"100%",
      margin:20,
      backgroundColor:"white", 
      left:7,
      bottom: 7
    },
    button:{
      height:40,
      width:200,
      backgroundColor:"black",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:5,
      }
});