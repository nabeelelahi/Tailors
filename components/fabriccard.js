import React from 'react'
import { View, StyleSheet, Image} from 'react-native';




export default  function FabricCard({ item }){
    return(
     <View style={styles.card}>
         <Image style={{width:106,height:106,borderRadius:25}} source={item.image}/>  
     </View>
    )
   }


   const styles = StyleSheet.create({
    card:{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: 'white',
        width: 110,
        height: 110,
        borderRadius: 25,
        textAlign: 'center',
        elevation: 9,

      },
   })