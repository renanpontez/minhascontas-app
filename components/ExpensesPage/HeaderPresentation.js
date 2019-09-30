import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const HeaderPresentation = (props) => {
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.totalMonth}>
          R$ {props.monthTotal}
        </Text>
        <Text>Total Despesas</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 100,
    backgroundColor: "#fff"
  },
  totalMonth: {
    fontSize: 25,
    textAlign: "center",
    lineHeight: 150,
    fontWeight: "bold"
  }
  
});


export default HeaderPresentation;