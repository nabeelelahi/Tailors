import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Step1 from './progressstep1';
import Step2 from './progressstep2';
import Step3 from './progressstep3';
import Step4 from './progressstep4';
import Step5 from './progressstep5';

class ProgressScreen extends Component {
  static navigationOptions = {
    header: null
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center'
    }
  };

  onNextStep = () => {
    console.log('called next step');
  };

  onPaymentStepComplete = () => {
    console.log('Payment step completed!');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  onSubmitSteps = () => {
    console.log('called on submit step.');
  };

  render() {
    return (
      <View style={styles.topcontainer}>
           <View style={styles.whiteshape}></View>
        <ProgressSteps
        borderWidth={4}
        progressBarColor="#B2BBC4"
        activeStepIconBorderColor='#001F2C'
        activeStepIconColor="#001F2C"
        completedProgressBarColor="#001F2C"
        completedStepIconColor="#001F2C"
        disabledStepIconColor="#B2BBC4"
        activeStepNumColor="white"
        disabledStepNumColor="black"
        marginBottom={25}>
          <ProgressStep
            nextBtnStyle={styles.nextbutton}
            nextBtnTextStyle={{color:'#008EC6',fontSize: 20,letterSpacing: 1}}

            onNext={this.onPaymentStepComplete}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <Text style={{color: 'black',fontSize: 25,textAlign:'center',letterSpacing:2}}>Choose Collar Style</Text>
             <Step1 />
          </ProgressStep>
          <ProgressStep
            previousBtnText="Back"
            nextBtnStyle={styles.nextbutton}
            nextBtnTextStyle={{color:'#008EC6',fontSize: 20,letterSpacing: 1}}
            previousBtnTextStyle={{color:'white',fontSize: 20,letterSpacing: 1}}
            previousBtnStyle={styles.previuosbutton}
            onNext={this.onPaymentStepComplete}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <Text style={{color: 'black',fontSize: 25,textAlign:'center',letterSpacing:2}}>Choose Collar Style</Text>
             <Step2 />
           
          </ProgressStep>
          <ProgressStep
            previousBtnText="Back"
            nextBtnStyle={styles.nextbutton}
            nextBtnTextStyle={{color:'#008EC6',fontSize: 20,letterSpacing: 1}}
            previousBtnTextStyle={{color:'white',fontSize: 20,letterSpacing: 1}}
            previousBtnStyle={styles.previuosbutton}
            onNext={this.onPaymentStepComplete}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <Text style={{color: 'black',fontSize: 25,textAlign:'center',letterSpacing:2}}>Choose Collar Style</Text>
             <Step3 />
           
          </ProgressStep>
          <ProgressStep
            previousBtnText="Back"
            nextBtnStyle={styles.nextbutton}
            nextBtnTextStyle={{color:'#008EC6',fontSize: 20,letterSpacing: 1}}
            previousBtnTextStyle={{color:'white',fontSize: 20,letterSpacing: 1}}
            previousBtnStyle={styles.previuosbutton}
            onNext={this.onPaymentStepComplete}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <Text style={{color: 'black',fontSize: 25,textAlign:'center',letterSpacing:2}}>Choose Collar Style</Text>
             <Step4 />
           
          </ProgressStep>
          <ProgressStep
            previousBtnText="Back"
            finishBtnText="Done"
            nextBtnStyle={styles.nextbutton}
            nextBtnTextStyle={{color:'#008EC6',fontSize: 20,letterSpacing: 1}}
            previousBtnTextStyle={{color:'white',fontSize: 20,letterSpacing: 1}}
            previousBtnStyle={styles.previuosbutton}
            onNext={this.onPaymentStepComplete}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <Text style={{color: 'black',fontSize: 25,textAlign:'center',letterSpacing:2}}>Choose Collar Style</Text>
             <Step5 />
           
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}


 const styles = StyleSheet.create({
    topcontainer:{
        flex: 1,
        backgroundColor: '#008EC6',
        height:'20%',
        width: '100%',
    },
    nextbutton:{
       backgroundColor: 'white', 
       height: '75%',
       width: '100%', 
       alignItems: 'center', 
       justifyContent: 'center', 
       borderRadius: 30,
    },
    previuosbutton:{
       backgroundColor: 'transparent', 
       height: '75%',
       width: '100%', 
       alignItems: 'center', 
       justifyContent: 'center', 
       borderRadius: 30,
       borderWidth: 2,
       borderColor: 'white'
    },
    whiteshape:{
        marginBottom: '4%',
        backgroundColor: 'white',
        height: '6%',
        width:'80%',
        opacity: 0.2,
        marginLeft: '20%',
        borderBottomRightRadius: 200,
        borderBottomLeftRadius: 1000
    },
 })

export default ProgressScreen;