import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import IconCard from '../components/Iconcard';

        const fitting =[
            {image: require('../assets/fitting1.png'), key: '1'},
            {image: require('../assets/fitting2.png'), key: '2'},
            {image: require('../assets/fitting3.png'), key: '3'},
        ]




export default function ChooseFitting() {
  return (
   <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topcontainer}>
            <View style={styles.whiteshape}></View>
           
            <Text style={{color:"black",fontWeight: '100',letterSpacing: 2,fontSize: 30,alignSelf:'center',marginTop: '8%'}}>Choose Shirt Fit</Text>
        
        </View>
            <View style={styles.midcontainer}>
                <Image source={require("../assets/fitting1.png")}  style={{ height: 273, width: 247 }}/>
                <Text  style={{color:"white",fontWeight: '100',letterSpacing: 2,fontSize: 30,alignSelf:'center',marginVertical: '3.5%'}}>Normal</Text>
                <Text  style={{color:"white",fontWeight: '100',letterSpacing: 1,fontSize: 18,alignSelf:'center',}}>Perfect for Everday use</Text>
            </View>
            <View style={styles.bottomcontainer}>
            <FlatList
                style={styles.flat2}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={fitting}
                renderItem={({item}) =>{
                    return( 
                        <IconCard item={item} height={85} width={85}/>
                )} }
            />
            </View>
            <TouchableOpacity style={styles.button}>
          <Text style={{fontSize: 18,color: 'white'}}>Done</Text>
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
          height:'20%',
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
      midcontainer:{
            alignItems: 'center',
            justifyContent: 'center',
            height: '50%',
            width: '100%',
            backgroundColor: '#001F2C'
      },
      bottomcontainer:{
        backgroundColor: '#1E4252',
        height:'15%',
        width: '100%',
        alignItems: 'center',
        padding: 5
    },
    button:{
        marginTop: '5%',
        backgroundColor: '#008EC6',
        width: '85%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
    }
});