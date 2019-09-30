import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SignupContainer from './SignupContainer';

const AuthPresentation = (props) => {
  return (
    <>
    
      <ImageBackground 
        source={{ uri: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
        style={{width: '100%', height: '100%'}} >

        <View style={styles.root}>
          <SignupContainer />
        </View>        
      </ImageBackground>
    </>

    
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
  }
});

export default AuthPresentation;