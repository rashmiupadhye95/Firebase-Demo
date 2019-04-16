import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/components/Login';
import Signup from './src/components/SignUp';

import AddItem from './src/components/AddItem';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddItem/>
        {/* <Login/>
        <Signup/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485F',
    paddingLeft: 60,
    paddingRight: 60
  }
});
