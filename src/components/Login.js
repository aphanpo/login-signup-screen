import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


export default class Login extends Component {
  render() {
    return (
    <View style={styles.loginForm}>
      <View>
        <TextInput placeholder="Email" style={styles.inputs}></TextInput>
        <TextInput placeholder="Password" style={styles.inputs}></TextInput>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.users}>
          <TouchableOpacity style={styles.login}>
            <Text style={styles.loginbutton}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signup}>
            <Text style={styles.signupbutton}>SIGN UP</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
    );
  }
  
}

/* STYLES */
const styles = StyleSheet.create({
  loginForm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 50,
  },
  inputs: {
    width: 350,
    borderColor: 'black',
    borderWidth: 2,
    padding: 15,
    margin: 8,
    borderRadius: 30,
    borderColor: '#CCC',
    paddingLeft: 30,
    fontWeight: 'bold'
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "bold",
    marginRight: 30,
    color: 'black'
  },
  users: {
    alignItems: 'center',
    marginTop: 30
  },
  login: {
    color: 'white',
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    width: 350,
    padding: 15,
    marginBottom: 10
  },
  signup: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    width: 350,
    padding: 15,
    marginBottom: 10
  },
  loginbutton: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  signupbutton: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});