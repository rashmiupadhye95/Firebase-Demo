import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class DashboardComponent extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
         <View>     
            <Text style={styles.header}>Welcome To Dashboard</Text> 
            
        </View>
           
    );
  }
}
const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center'
    },
    header:{
        fontSize:24,
        color: '#fff',
        paddingBottom:10,
        marginBottom: 40,
        borderBottomColor: '#188187',
        borderBottomWidth: 1,
    },
  
    inputBox: {
      width:300,
      backgroundColor:'rgba(255, 255,255,0.2)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10
    },
    button: {
      width:300,
      backgroundColor:'#1c313a',
       borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
    loginText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16,
    },
    
  });
