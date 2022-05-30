import React, { useState } from "react";
import { StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';



export default function Title(text="") {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white", 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '297px',
    height: '40px',
    left: '16px',
    top: '101px',
  },
  title: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: "400",
    fontSize: 36,
    lineHeight: 40,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: -0.015,
    color: '#000000',
  }
});






