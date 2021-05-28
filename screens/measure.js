import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Measure() {
  return (
    <ImageBackground  source={require('../assets/measure.png')}  style={styles.image}>
      <StatusBar style="auto" />
      <Text style={styles.toptext}>Measure.</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: '8.7%',
    flex: 1,
    resizeMode: "cover",
  },
  toptext:{
      width: '45%',
      color: 'white',
      fontSize: 35,
      marginTop: '15%',
      marginLeft: '5%'
  },
  secondtoptext:{
      width: '60%',
      color: 'white',
      fontSize: 35,
      marginLeft: '5%'
  },
});