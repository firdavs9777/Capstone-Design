import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet

 
} from "react-native";

export default function Language({ navigation }) {
 
  return (
  <Text style={styles.baseText}>
      <Text style={styles.titleText}>MangoTalk FAQ</Text>
      
  </Text>
    )
};
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
      fontSize: 25,
      fontWeight: "bold",
      paddingTop:30
  }
  });

