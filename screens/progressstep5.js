import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IconCard from '../components/Iconcard';
import { Picker } from 'react-native-picker-dropdown'




export default function Step5() {
  return (
   <View style={styles.container}>
            <Text style={{color:"white",letterSpacing:1,fontSize: 18,width: '80%',textAlign:'center',alignSelf:'center',marginTop:'5%'}}>Do you want a pocket?</Text>
           <View style={styles.picker}>
           <Picker
          mode="dialog"
          textStyle={styles.pickerText}
        >
          <Picker.Item label="No Pockets" value="no" />
          <Picker.Item label="1 Pockets" value="one" />
          <Picker.Item label="2 Pockets" value="two" />
        </Picker>
           </View>
            <Text style={{color:"white",letterSpacing:1,fontSize: 18,width: '80%',textAlign:'center',alignSelf:'center',marginTop:'5%'}}>Select your button color</Text>
           <View style={styles.picker}>
           <Picker
          mode="dialog"
          textStyle={styles.pickerText}
        >
          <Picker.Item label="Black" value="black" />
          <Picker.Item label="Red" value="red" />
          <Picker.Item label="Grey" value="grey" />
        </Picker>
           </View>
            <Text style={{color:"white",letterSpacing:1,fontSize: 18,width: '80%',textAlign:'center',alignSelf:'center',marginTop:'5%'}}>Do you want a pocket?</Text>
           <View style={styles.picker}>
           <Picker
          mode="dialog"
          textStyle={styles.pickerText}
        >
          <Picker.Item label="No Watch" value="no" />
          <Picker.Item label="Wrist" value="yes" />
        </Picker>
           </View>
           <Text style={{color:"white",letterSpacing:1,fontSize: 18,width: '80%',textAlign:'center',alignSelf:'center',marginTop:'5%'}}>Do you want a contrasting white collar?</Text>
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
            backgroundColor: '#001F2C',
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
            height: '65%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
        },
        no:{
            backgroundColor: 'transparent',
            width:'45%',
            height: '65%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            borderWidth: 2,
            borderColor: 'white',
            marginLeft: '5%'
        },
        picker:{
            marginVertical: '3%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            height: '8%',
            borderRadius: 25,
            backgroundColor: 'white'
        }
});