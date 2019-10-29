import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: 50,
    backgroundColor: "#f0EEEE",
    borderRadius: 5,
    flexDirection: "row"
  },
  inputStyle: {
    flex: 1,
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 26,
    alignSelf: "center",
    marginHorizontal: 10
  }
});

export default SearchBar;
