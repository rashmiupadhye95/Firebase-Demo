import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import {loginUser} from '../services/dbService';
const Toast = (props) => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
};

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible:false,
      message: '',
      user: {
        email: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.doLogin = this.doLogin.bind(this);
  }
  handleChange(e, fieldName){
    let currentState = this.state;
    currentState.user[fieldName] = e.nativeEvent.text;
    this.setState(currentState);
  }

  doLogin(){
    loginUser(this.state.user).then(() => {
        this.setState({message:'User Logged In',})
        this.props.navigation.navigate('Dashboard');
      }).catch(err=>{
          this.setState({message:err.message,visible:true});
      });
}
  render() {
    return (
         <View>     
         <Text style={styles.header}>Welcome to My App</Text> 
           <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChange={(e) => {
                this.handleChange(e, 'email')
              }}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              onChange={(e) => {
                this.handleChange(e, 'password')
              }}
              />  
           <TouchableOpacity style={styles.button} onPress={this.doLogin}>
             <Text style={styles.buttonText}
             >Login</Text>
           </TouchableOpacity>   
           <Toast visible={this.state.visible} message={this.state.message} />
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
    }
    
  });
// const styles = StyleSheet.create({
//     regForm: {
//         alignSelf:'stretch'
//     },
//     header: {
//         fontSize:24,
//         color:'#fff',
//         paddingBottom: 10,
//         marginBottom: 10,
//         borderBottomColor: '#199187',
//         borderBottomWidth: 1,
//     },
//     textInput: {
//         alignSelf: 'stretch',
//         height: 40,
//         marginBottom: 30,
//         color: '#fff',
//         borderBottomColor: '#F8F8F8',
//         borderBottomWidth: 1,
//     }, 
//     button:{
//         alignSelf: 'stretch',
//         alignItems: 'center',
//         padding: 20,
//         marginTop: 30,
//     }
//   });
