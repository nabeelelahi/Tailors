import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Slider2() {
  return (
   <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topcontainer}>
            <View style={styles.whiteshape}></View>
            <View style={styles.toptexts}>
            <Text style={{color:"white",fontSize: 23,alignSelf:'center',marginLeft: '35%'}}>Tutorial</Text>
            <TouchableOpacity>
                <Text style={{color:"white",fontSize: 14,alignSelf:'flex-end',marginHorizontal: '15%',marginTop: '1.5%'}}>Skip</Text>
            </TouchableOpacity>
            </View>
        </View>
            <View style={styles.midcontainer}>
                <Image source={require("../assets/right.png")}  style={{ height: 511, width: 164 }}/>
            </View>
            <View style={styles.bottomcontainer}>
            <Text style={{color:"black",fontSize: 18,}}>Right Side Photo</Text>
            <Image source={require("../assets/twodots.png")}  style={{ height: 15, width: 90, marginTop: '5%' }}/>
            </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      topcontainer:{
          marginTop: '8.7%',
          backgroundColor: '#008EC6',
          height:'13%',
          width: '100%',
      },
      whiteshape:{
          backgroundColor: 'white',
          height: '35%',
          width:'80%',
          opacity: 0.2,
          marginLeft: '20%',
          borderBottomRightRadius: 200,
          borderBottomLeftRadius: 1000
      },
      toptexts:{
          flexDirection: 'row',
          width: '100%',
          height: '20%',
          marginTop: '11%'
      },
      midcontainer:{
            alignItems: 'center',
            justifyContent: 'center',
            height: '70%',
            width: '100%',
            backgroundColor: '#F5F5F9'
      },
      bottomcontainer:{
        backgroundColor: '#008EC6',
        height:'13%',
        width: '100%',
        alignItems: 'center',
        padding: 5
    },
});