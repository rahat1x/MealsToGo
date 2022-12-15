import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurentInfo = ({ restaurent = {} }) => {
  const {
    name = "Sinbad Resort",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurent;

  return (
    <Card elevation={5} style={styles.Card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.textC}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  textC: {
    fontSize: 20,
    padding:5,
    textAlign: "center"
  },
  card:{
    backgroundColor: "white",
  },
  cover: {
    padding:20,
    backgroundColor: "white"
  }
});
