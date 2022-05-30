import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from '../components/Themed';
import Calendar from "../components/Calendar"
import Title from "../components/Title";



export default function Date() {
  const navigation =useNavigation<StackNavigationProp<any>>()
  return (
    <View style={styles.container}>
      <Title text='Choix des dates'></Title>
      <Text style={styles.description}>Sélectionnez vos disponibilités</Text>
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
