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
      <Title text='Choix des dates'/>
      <Subtitle text="Sélectionnez vos disponibilités"/>
      <Calendar/>
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
});
