import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import IconCard from '../components/Iconcard';

const collars = [
    {image: require('../assets/collar1.png'), key: '1'},
    {image: require('../assets/collar2.png'), key: '2'},
    {image: require('../assets/collar3.png'), key: '3'},
    {image: require('../assets/collar4.png'), key: '4'},
    {image: require('../assets/collar1.png'), key: '5'},
    {image: require('../assets/collar2.png'), key: '6'},
    {image: require('../assets/collar3.png'), key: '7'},
]




export default function Step1() {

  return (
   <View style={styles.container}>
            <View style={styles.midcontainer}>
                <Image source={require("../assets/collar1.png")}  style={{ height: 200, width: 200 }}/>
                <Text  style={{color:"white",fontWeight: '100',letterSpacing: 2,fontSize: 25,alignSelf:'center',marginVertical: '3.5%'}}>Formal Collar</Text>
                <Text  style={{color:"white",fontWeight: '100',letterSpacing: 2,fontSize: 20,textAlign:"center",}}>Great for everyday used. Can be contrasted with ties. </Text>
            </View>
            <View style={styles.bottomcontainer}>
            <FlatList
                style={styles.flat2}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={collars}
                renderItem={({item}) =>{
                    return( 
                        <IconCard item={item} height={84} width={84}/>
                )} }
            />
            </View>
   </View>
  );
}

const styles = StyleSheet.create({
        container:{
            flex: 1,
        },
      midcontainer:{
            alignItems: 'center',
            justifyContent: 'center',
            height: '70%',
            width: '100%',
            backgroundColor: '#001F2C'
      },
      bottomcontainer:{
        paddingTop: '4%',
        padding: "3%",
        backgroundColor: '#1E4252',
        height:'26%',
        width: '100%',
        alignItems: 'center',
    },
});