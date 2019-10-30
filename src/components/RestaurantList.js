import React from "react";
import { Text, Image, View, StyleSheet, ScrollView } from "react-native";
import Restaurant from "./Restaurant";
import { FlatList } from "react-native-gesture-handler";

const RestaurantList = ({ cost, results }) => {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.header}>
        {cost}
      </Text>
      <ScrollView>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={result => result.id}
          renderItem={({ item }) => {
            console.log(item.image_url);
            return (
              <Restaurant
                imageSource={{ uri: item.image_url }}
                name={item.name}
                ratings={item.rating}
                reviews={item.review_count}
              />
            );
          }}
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
    fontWeight: "bold",
    marginBottom: 10
  }
});

export default RestaurantList;
