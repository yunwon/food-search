import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import RestaurantList from "../components/RestaurantList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurantList
          results={filterResultsByPrice("$")}
          cost="Cost Effective"
        />
        <RestaurantList
          results={filterResultsByPrice("$$")}
          cost="Bit Pricer"
        />
        <RestaurantList
          results={filterResultsByPrice("$$$")}
          cost="Big Spender!"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1
  },
  input: {
    padding: 6,
    backgroundColor: "#f0EEEE",
    borderRadius: 4
  }
});

export default SearchScreen;
