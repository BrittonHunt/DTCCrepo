import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

// Determine what variables the song uses.
var songImage = "./images/Michael_Jackson_-_Bad.png";
var songTitle = "Librarian Girl";
var artist = "Michael Jackson";
var songLength = 12780;

// Create the progress bar
const Progress = ({ start, length, height }) => {
  return (
    <View
      style={{
        height,
        backgroundColor: "#fff",
        borderRadius: height,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          height,
          width: "100%",
          backgroundColor: "fff",
          borderRadius: height,
          position: "absolute",
          left: 0,
          top: 0,
        }}
      />
    </View>
  );
};

// Main function
export default function App() {
  return (
    <View style={styles.body2}>
      <Image source={require(songImage)} style={styles.img} />
      <Text>{"\n"}</Text>
      <Text style={styles.headerText}>{songTitle}</Text>
      <Text style={styles.bodyText}>
        {artist}
        {"\n"}
      </Text>
      <StatusBar style="auto" />
      <Progress start={0} length={songLength} height={20} />
      <Text style={styles.bodyText}>4:19</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body2: {
    paddingBottom: 85,
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 20,
  },

  headerText: {
    color: "#fff",
    fontSize: 50,
  },

  bodyText: {
    color: "#bdbdbd",
    fontSize: 30,
  },

  img: {
    borderRadius: 20,
    transform: [{ scale: 1 }],
  },
});
