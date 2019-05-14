import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import RegisterComponent from '../components/RegisterComponent';
import SignIn from '../components/SignIn';

export default class RegisterPage extends Component{

	render() {
		return(
			<View style={styles.container}>
				<RegisterComponent navigation={this.props.navigation}/>
        <SignIn navigation={this.props.navigation}/>
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