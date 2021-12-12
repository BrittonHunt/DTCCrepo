import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

// Determines what picture the song uses.
var songImage='./images/Michael_Jackson_-_Bad.png';
var songTitle = "Bad";
var artist = "Michael Jackson";

export default function App() {

  return (
    <View style={styles.body2} >
      <Image source={require(songImage)} style={styles.img} />
      <Text>{'\n'}</Text>
      <Text style = {styles.headerText}>
        {songTitle} 
        </Text>
      <Text style = {styles.bodyText}>
      {artist}</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  body2: {
    paddingTop: 170,
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    color: '#fff',
    fontSize: 50,
  },

  bodyText: {
    color: '#bdbdbd',
    fontSize: 30,
  },

  img: {
    borderRadius: 20,
    transform: [{scale: 1}],
  }
});
