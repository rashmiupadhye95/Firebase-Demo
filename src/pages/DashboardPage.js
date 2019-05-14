import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import DashboardComponent from '../components/DashboardComponent';

export default class DashBoardPage extends Component{

	render() {
		return(
			<View style={styles.container}>
				<DashboardComponent/>
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