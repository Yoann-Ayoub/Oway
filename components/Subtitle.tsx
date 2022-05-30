import React, { useState } from "react";
import { StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';



export default function Subtitle(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{props.text}</Text>
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
    width: '259px',
    height: '40px',
    left: '16px',
    top: '160px',
  },
  subtitle: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '27.5%',
    bottom: '27.5%',
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    /* identical to box height */
    display: 'flex',
    alignItems: 'center',
    letterSpacing: -0.015,
    
    color: '#000000',
  }
});
