import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    backgroundColor: '#FF5E62'
  },
});
