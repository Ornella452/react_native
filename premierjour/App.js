import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',

  },
  police: {
    fontSize: 30,
    paddingTop: 80,
    paddingBottom: 80,

  },
  centrer: {
    textAlign: 'center',
    paddingTop: 80,
    paddingBottom: 80,

  },

  gras: {
    fontWeight: 'bold',
    paddingTop: 80,
    paddingBottom: 80,
  },
  img: {
    width: 300,
    height: 100,
  },
  

});

class App extends React.Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>


          <Text
            style={styles.police}>
            Police 30
          </Text>

          <Text
            style={styles.centrer} >
            Une autre centrée
          </Text>

          <Text
            style={styles.gras}>
            Et un dernier texte en gras
          </Text>

          <Image source={require('./assets/logo.png')} style={styles.img} />

          <Image
            source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
            style={styles.img} />
          <Button onPress={() => {alert('You tapped the button!');}} title="click"/>

          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          <ActivityIndicator size="large" color="black"/>


        </View>
      </ScrollView>


    );
  }
}

export default App;




/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/