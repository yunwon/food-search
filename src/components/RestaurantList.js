import React from "react";
import { Text, Image, View, StyleSheet, ScrollView } from "react-native";
import Restaurant from "./Restaurant";

const RestaurantList = ({ cost }) => {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.header}>
        {cost}
      </Text>
      <ScrollView horizontal={true}>
        <Restaurant
          imageSource={require("../../assets/beach.jpg")}
          name="Fish City"
          ratings={4.5}
          reviews={489}
        />
        <Restaurant
          imageSource={require("../../assets/mountain.jpg")}
          name="Shit City"
          ratings={4.5}
          reviews={489}
        />
        <Restaurant
          imageSource={require("../../assets/forest.jpg")}
          name="Foodieeee"
          ratings={4.5}
          reviews={489}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#e6e6e6",
    borderWidth: 0,
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  header: {
    fontSize: 20,
    marginBottom: 10
  }
});

export default RestaurantList;
