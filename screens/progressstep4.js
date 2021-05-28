import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import IconCard from '../components/Iconcard';




export default function Step4() {
  return (
   <View style={styles.container}>
            <Text style={{color:"white",letterSpacing:1,fontSize: 20,width: '80%',textAlign:'center',alignSelf:'center',marginTop:'5%'}}>Do you want a Monogram (Initials)?</Text>
            <View style={styles.towbuttons}>
                <TouchableOpacity style={styles.yes}>
                    <Text style={{color:'#001F2C',fontSize:18,letterSpacing:1}}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.no}>
                    <Text style={{color:'white',fontSize:18,letterSpacing:1}}>No</Text>
                </TouchableOpacity>
            </View>
   </View>
  );
}

const styles = StyleSheet.create({
        container:{
            flex: 1,
            width: '100%',
            backgroundColor: '#001F2C'
        },
        towbuttons:{
            marginTop: '10%',
            alignSelf: 'center',
            flexDirection: 'row',
            width: '80%',
            flex: 1
        },
        yes:{
            backgroundColor: 'white',
            width:'45%',
            height: '10%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
        },
        no:{
            backgroundColor: 'transparent',
            width:'45%',
            height: '10%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            borderWidth: 2,
            borderColor: 'white',
            marginLeft: '5%'
        }
});