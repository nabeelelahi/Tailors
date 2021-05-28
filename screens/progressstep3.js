import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import IconCard from '../components/Iconcard';

const length = [
    {image: require('../assets/lenght1.png'), key: '1'},
    {image: require('../assets/length2.png'), key: '2'},
    {image: require('../assets/length3.png'), key: '3'},
]




export default function Step3() {
  return (
   <View style={styles.container}>
            <View style={styles.midcontainer}>
                <Image source={require("../assets/length2.png")}  style={{ height: 200, width: 240 }}/>
                <Text  style={{color:"white",fontWeight: '100',letterSpacing: 2,fontSize: 25,alignSelf:'center',marginVertical: '3.5%'}}>Tucked</Text>
                <Text  style={{color:"white",fontWeight: '100',letterSpacing: 2,fontSize: 20,textAlign:"center",}}>Longer tails perfect for tucking in </Text>
            </View>
            <View style={styles.bottomcontainer}>
            <FlatList
                style={styles.flat2}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={length}
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