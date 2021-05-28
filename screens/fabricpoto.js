import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function FabricPhoto() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topcontainer}>
            <View style={styles.whiteshape}></View>
            <View style={styles.toptexts}>
            <Text style={{color:"white",fontSize: 23,alignSelf:'center',marginLeft: '35%'}}>Camera</Text>
            <TouchableOpacity>
                <Text style={{color:"white",fontSize: 14,alignSelf:'flex-end',marginHorizontal: '15%',marginTop: '1.5%'}}>Next</Text>
            </TouchableOpacity>
            </View>
        </View>
            <View style={styles.midcontainer}>
           <View style={styles.cameraview}>
           <TouchableOpacity style={styles.flashbutton}>
           <Image source={require("../assets/flash.png")} style={{height:35,width:22,}}/>
          </TouchableOpacity>
           <Camera style={styles.camera} type={type} ratio="1:1">
      </Camera>
           </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.flipbutton}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
           <Image source={require("../assets/flip.png")} style={{height:34,width:32}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.capturebutton}>
           <Image source={require("../assets/capture.png")} style={{height:78,width:78}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingbutton}>
           <Image source={require("../assets/camerasetting.png")} style={{height:37,width:37}}/>
          </TouchableOpacity>
        </View>
            </View>
            <View style={styles.bottomcontainer}> 
            <Text style={styles.bottomtextview}>Fabric Photo</Text>
            <TouchableOpacity style={styles.button}>
          <Text style={{fontSize: 18,color: 'white'}}>Next</Text>
            </TouchableOpacity>
            </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  camera: {
    flex: 1,
  },
  cameraview: {
    flex: 9,
    height: '60%',
    width: '85%',
    marginTop: '5%',
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 3,
    marginBottom: "8%",
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  flipbutton: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginBottom: '8%'
  },
  flashbutton: {
    marginBottom: '5%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginLeft: '5%',
  },
  capturebutton: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  settingbutton: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginBottom: '8%'
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  topcontainer:{
    marginTop: '8.7%',
    backgroundColor: '#008EC6',
    height:'15%',
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
    paddingTop: "5%",
      justifyContent: 'center',
      height: '64%',
      width: '100%',
      backgroundColor: '#F5F5F9'
},
bottomcontainer:{
  backgroundColor: '#413B3B',
  height:'17%',
  width: '100%',
  alignItems: 'center',
},
bottomtextview:{
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#001F2C',
    width: '50%',
    height: "35%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 5,
    fontSize: 15
},
button:{
    marginTop: '5%',
    backgroundColor: '#008EC6',
    width: '85%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
}
});
