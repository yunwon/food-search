import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import yelp from "../api/Yelp";

const DetailScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const id = navigation.getParam("id");

  const searchBusinessApi = async id => {
    try {
      const response = await yelp.get(`/${id}`);
      console.log(response.data);
      setResult(response.data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchBusinessApi(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        keyExtractor={photo => photo}
        data={result.photos}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    marginBottom: 10
  }
});

export default DetailScreen;
