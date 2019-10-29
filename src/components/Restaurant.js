import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const Restaurant = ({ name, imageSource, ratings, reviews }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text>{name}</Text>
      <Text style={styles.text}>
        {ratings} Stars, {reviews} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10
  },
  image: {
    marginBottom: 10
  },
  text: {
    color: "#777777"
  }
});

export default Restaurant;
