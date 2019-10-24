import React from "react";
import { Text, TextInput, Image, View, StyleSheet } from "react-native";
import RestaurantList from "../components/RestaurantList";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search" />
      <RestaurantList cost="Cost Effective" />
      <RestaurantList cost="Bit Pricer" />
      <RestaurantList cost="Big Spender!" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  input: {
    padding: 6,
    backgroundColor: "#e6e6e6",
    borderRadius: 4
  }
});

export default SearchScreen;
