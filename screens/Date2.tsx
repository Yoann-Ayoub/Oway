import React from "react";
import { useNavigation } from '@react-navigation/native';
import {Image, StyleSheet} from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { View } from '../components/Themed';
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";


export default function Date() {
  const navigation =useNavigation<StackNavigationProp<any>>()
  return (
    <View style={styles.container}>
      <Title text='Résultats des dates'/>
      <Subtitle text="Tout le monde a voté, le calendrier ci-dessous présente les résultats."/>
      <Image style={{width: 388, height: 492, resizeMode: "center", overflow: "visible"}} source = {require('../Calendar.png')} />
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
  },
  image: {
    width: '486px',
    height: '616px',
    resizeMode: 'stretch'
  }
});
