import React from 'react'
import { View, StyleSheet, Image} from 'react-native';




export default  function IconCard({ item, height, width }){
    return(
     <View style={styles.card}>
         <Image style={{width,height,borderRadius:25}} source={item.image}/>  
     </View>
    )
   }


   const styles = StyleSheet.create({
    card:{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: '#304D56',
        width: 94,
        height: 94,
        borderRadius: 25,
        textAlign: 'center',
        elevation: 9,
      },
   })