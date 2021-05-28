import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Splash() {
  return (
    <ImageBackground  source={require('../assets/splash.png')}  style={styles.image}>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});