import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet

 
} from "react-native";

export default function AskQuestion({ navigation }) {
 
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     
    <Text style={styles.titleText}> Ask a Question</Text>
    {"\n"}
    <Text style={styles.introduction}> Please note that MangoTalk Support is done by volunteers. We try to respond as quickly as possible, but it might take a while!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign:"center",
    paddingTop:30
  },
  introduction:
  {
      fontSize: 15,
      fontWeight: "bold",
      paddingTop:30
  }
  });

