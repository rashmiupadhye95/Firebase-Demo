import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import LoginComponent from '../components/LoginComponent';
import SignUp from '../components/SignUp';
import GeoLocationComponent from '../components/GeoLocation';

export default class LoginPage extends Component{

	render() {
		return(
      
			<View style={styles.container}>
				<LoginComponent navigation={this.props.navigation}/>
        <SignUp navigation={this.props.navigation}/>
        <GeoLocationComponent/>
			</View>	
			)
	}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#36485F',
      paddingLeft: 60,
      paddingRight: 60
    },
  });