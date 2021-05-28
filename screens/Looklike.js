import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function LookLike() {
  return (
   <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topcontainer}>
            <View style={styles.whiteshape}></View>       
            <Text style={{color:"black",fontSize: 25,alignSelf:'center',letterSpacing: 2,marginTop: '7%'}}>You'll Look Like this.</Text>
        </View>
        <View style={styles.midcontainer}>
                <Image source={require("../assets/banda.png")}  style={{ height: 512, width: 308 }}></Image>
            </View>
            <TouchableOpacity style={styles.button}>
          <Text style={{fontSize: 18,color: 'white',letterSpacing: 2}}>Go to Home</Text>
      </TouchableOpacity>
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
            height: '72%',
            width: '100%',
            backgroundColor: '#fff'
      },
      button:{
        marginTop: '3%',
        backgroundColor: '#008EC6',
        width: '85%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
    }
});