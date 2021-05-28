import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import IconCard from '../components/Iconcard';

        const options =[
            {image: require('../assets/shirt.png'), key: '1'},
            {image: require('../assets/pant.png'), key: '2'},
            {image: require('../assets/coat.png'), key: '3'},
            {image: require('../assets/suit.png'), key: '4'},
        ]




export default function ChooseOption() {
  return (
   <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topcontainer}>
            <View style={styles.whiteshape}></View>
           
            <Text style={{color:"black",fontWeight: '100',letterSpacing: 2,fontSize: 30,alignSelf:'center',marginTop: '13%'}}>Choose one option</Text>
        
        </View>
            <View style={styles.midcontainer}>
                <Image source={require("../assets/shirt.png")}  style={{ height: 293, width: 277 }}/>
                <Text  style={{color:"white",fontWeight: '100',letterSpacing: 2,fontSize: 30,alignSelf:'center',marginVertical: '3.5%'}}>Formal Shirt</Text>
            </View>
            <View style={styles.bottomcontainer}>
            <FlatList
                style={styles.flat2}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={options}
                renderItem={({item}) =>{
                    return( 
                        <IconCard item={item} height={84} width={84}/>
                )} }
            />
            </View>
            <TouchableOpacity style={styles.button}>
          <Text style={{fontSize: 18,color: 'white'}}>Next</Text>
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
          height:'19%',
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