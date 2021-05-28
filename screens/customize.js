import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import FabricCard from '../components/fabriccard';
import IconCard from '../components/Iconcard';


const fabric = [
    {image: require('../assets/fabric1.png'), key: '1'},
    {image: require('../assets/fabric2.png'), key: '2'},
    {image: require('../assets/fabric3.png'), key: '3'},
    {image: require('../assets/fabric4.png'), key: '4'},
    {image: require('../assets/fabric5.png'), key: '5'},
    {image: require('../assets/fabric1.png'), key: '6'},
    {image: require('../assets/fabric2.png'), key: '7'},
]

const collars = [
    {image: require('../assets/collar1.png'), key: '1'},
    {image: require('../assets/collar2.png'), key: '2'},
    {image: require('../assets/collar3.png'), key: '3'},
    {image: require('../assets/collar4.png'), key: '4'},
    {image: require('../assets/collar1.png'), key: '5'},
    {image: require('../assets/collar2.png'), key: '6'},
    {image: require('../assets/collar3.png'), key: '7'},
]

const cuffs = [
    {image: require('../assets/cough1.png'), key: '1'},
    {image: require('../assets/cough2.png'), key: '2'},
    {image: require('../assets/cough3.png'), key: '3'},
    {image: require('../assets/cough4.png'), key: '4'},
    {image: require('../assets/cough5.png'), key: '5'},
    {image: require('../assets/cough6.png'), key: '6'},
    {image: require('../assets/cough7.png'), key: '7'},
]
const length = [
    {image: require('../assets/lenght1.png'), key: '1'},
    {image: require('../assets/length2.png'), key: '2'},
    {image: require('../assets/length3.png'), key: '3'},
]


export default function Customize() {
  return (
    <ImageBackground  source={require('../assets/background.jpg')}  style={styles.image}>
      <StatusBar style="auto" />
      <Text style={styles.toptext}>Customize</Text>
      <Text style={styles.toptext2}>Choose from hundreds of options.</Text>
      <Text style={styles.listext}>Fabric</Text>
      <View style={{height:"15%",marginTop:5}}>
        <FlatList
        style={styles.flat2}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={fabric}
        renderItem={({item}) =>{
            return( 
            <FabricCard item={item}/>
        )} }
        />
    </View>
    <Text style={styles.listext}>Collar</Text>
      <View style={{height:"12.5%",marginTop:3}}>
        <FlatList
        style={styles.flat2}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={collars}
        renderItem={({item}) =>{
            return( 
            <IconCard item={item} height={70} width={76}/>
        )} }
        />
    </View>
    <Text style={styles.listext}>Cuffs</Text>
      <View style={{height:"12.5%",marginTop:3}}>
        <FlatList
        style={styles.flat2}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={cuffs}
        renderItem={({item}) =>{
            return( 
            <IconCard item={item} height={60} width={54}/>
        )} }
        />
    </View>
    <Text style={styles.listext}>Length</Text>
      <View style={{height:"12.5%",marginTop:3}}>
        <FlatList
        style={styles.flat2}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={length}
        renderItem={({item}) =>{
            return( 
            <IconCard item={item} height={66} width={83}/>
        )} }
        />
    </View>
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
      width: '80%',
      color: 'white',
      fontSize: 35,
      marginTop: '8%',
      marginLeft: '5%'
  },
  toptext2:{
      textAlign: 'center',
    width: '80%',
    color: 'white',
    fontSize: 25,
    marginVertical: '1%',
    marginLeft: '5%'
},
listext:{
  width: '80%',
  color: 'white',
  fontSize: 27,
  marginLeft: '5%'
},
  secondtoptext:{
      width: '60%',
      color: 'white',
      fontSize: 35,
      marginLeft: '5%'
  },
  button:{
      marginTop: '120%',
      backgroundColor: 'white',
      width: '85%',
      height: '5%',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 30,
  }
});