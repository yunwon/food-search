import React, { useState } from "react";
import { Text, TextInput, Image, View, StyleSheet } from "react-native";
import RestaurantList from "../components/RestaurantList";
import SearchBar from "../components/SearchBar";
import yelp from "../api/Yelp";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "auckland"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      seterrorMessage("Something went wrong 😢");
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{results.length} restaurants found </Text>
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
    backgroundColor: "#f0EEEE",
    borderRadius: 4
  }
});

export default SearchScreen;
