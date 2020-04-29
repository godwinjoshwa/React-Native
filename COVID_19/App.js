import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Screens/Header';
import Body from './Screens/Body';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Body/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
  
  },
});
