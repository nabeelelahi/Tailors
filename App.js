import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraBack from './screens/cameraback';
import CameraFront from './screens/camerafront';
import CameraLeft from './screens/cameraleft';
import CameraRight from './screens/cameraright';
import Slider1 from './screens/slider1';
import Slider2 from './screens/slider2';
import Slider3 from './screens/slider3';
import Slider4 from './screens/slider4';
import Splash from './screens/splash';
import ShopMen from './screens/shopmen'
import Measure from './screens/measure';
import Customize from './screens/customize';
import ChooseOption from './screens/chooseoption';
import ChooseFitting from './screens/choosefitting';
import FabricPhoto from './screens/fabricpoto';
import LookLike from './screens/Looklike';
import ProgressScreen from './screens/pregressscreen';

export default function App() {
  return (
        <FabricPhoto />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
