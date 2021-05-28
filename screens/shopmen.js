import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ShopMen() {
  return (
    <ImageBackground  source={require('../assets/shopmen.jpg')}  style={styles.image}>
      <StatusBar style="auto" />
      <Text style={styles.toptext}>Custom Clothes.</Text>
      <Text style={styles.secondtoptext}>Guaranteed Fit.</Text>
      <TouchableOpacity style={styles.button}>
          <Text style={{fontSize: 15,fontWeight: '100',letterSpacing: 1}}>Shop Men's</Text>
      </TouchableOpacity>
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
  button:{
      marginTop: '100%',
      backgroundColor: 'white',
      width: '85%',
      height: '5%',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 30,
  }
});