import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from '../components/Themed';
import Calendar from "../components/Calendar"
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";



export default function Date() {
  const navigation =useNavigation<StackNavigationProp<any>>()
  return (
    <View style={styles.container}>
      <Title text='Résultats des dates'/>
      <Subtitle text="Tout le monde a voté, le calendrier ci-dessous présente les résultats."/>
      <div style={{position: 'absolute', top: '200px'}}>
        <button style={{width: '112px', height: '32px', backgroundColor: '#1EA21C', borderRadius: 16}}>Disponible</button>
        <button style={{width: '112px', height: '32px', backgroundColor: '#E9A16D', borderRadius: 16}}>Peut-Être</button>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    color:"black",
    fontSize: 20,
  },
  legend: {
    position: 'absolute',
    width: '225px',
    height: '32px',
    backgroundColor: '#1EA21C',
    // left: calc(50% - 225/2 - 2),
    // top: calc(50% - 32/2 - 123)
  }
});
