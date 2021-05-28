import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import IconCard from '../components/Iconcard';

const cuffs = [
    {image: require('../assets/cough1.png'), key: '1'},
    {image: require('../assets/cough2.png'), key: '2'},
    {image: require('../assets/cough3.png'), key: '3'},
    {image: require('../assets/cough4.png'), key: '4'},
    {image: require('../assets/cough5.png'), key: '5'},
    {image: require('../assets/cough6.png'), key: '6'},
    {image: require('../assets/cough7.png'), key: '7'},
]




export default function Step2() {
  return (
   <View style={styles.container}>
            <View style={styles.midcontainer}>
                <Image source={require("../assets/cough1.png")}  style={{ height: 200, width: 175 }}/>
                <Text  style={{color:"white",fontWeight: '100',letterSpacing: 2,fontSize: 25,alignSelf:'center',marginVertical: '3.5%'}}>Normal Cuff</Text>
                <Text  style={{color:"white",fontWeight: '100',letterSpacing: 2,fontSize: 20,textAlign:"center",}}>Great for everyday used.  </Text>
            </View>
            <View style={styles.bottomcontainer}>
            <FlatList
                style={styles.flat2}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={cuffs}
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
            height: '76%',
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