import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StyleSheet, Text, View } from "react-native";
import SearchScreen from "./src/screens/SearchScreen";
import DetailScreen from "./src/screens/DetailScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Where do you want to eat today?"
    }
  }
);

export default createAppContainer(navigator);
