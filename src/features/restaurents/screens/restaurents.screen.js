import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurentInfo } from "../components/restaurent-info.component"; 


export const RestaurentsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <Searchbar />
      </View>
      <View style={styles.bodyView}>
        <RestaurentInfo />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  searchView: {
    padding: 16,
    justifyContent: "center",
  },
  bodyView: {
    padding:16,
    flex: 1,
    backgroundColor: "lightgray",
  },
});
