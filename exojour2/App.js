import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List'

class App extends React.Component {
  render() {
    return (
      <View>
        
        <List></List>

      </View>
    );
  }
}

export default App;