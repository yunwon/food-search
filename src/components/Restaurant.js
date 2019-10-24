import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const Restaurant = ({ name, imageSource, ratings, reviews }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} />
      <Text>{name}</Text>
      <Text>
        {ratings} Stars, {reviews} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10
  }
});

export default Restaurant;
