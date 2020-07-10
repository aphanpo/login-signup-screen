import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Header extends Component {
  render() {
    return (
    <View style={styles.header}>
      <View>
        <Text style={styles.name}>Commonplace</Text>
        <Text style={styles.subtitle}>Be heard.</Text>
      </View>
    </View>
    );
  }
  
}

/* STYLES */
const styles = StyleSheet.create({
    header: {
        marginTop: 200,
        marginBottom: 185,
    },
    name: {
        // fontFamily: 'Pacifico-Regular',
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
    }
});