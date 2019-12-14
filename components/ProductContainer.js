import React from "react";
import { StyleSheet, Text, Button, View, Image } from "react-native";

export default function ProductContainer(props) {
  const product = props.product;
  return (
    <View style={styles.container}>
      <Text>{product.name}</Text>
      <Image style={styles.picture} source={{ uri: product.picture_url }} />
      <Button
        title="product details"
        onPress={() => props.navigation.navigate("Details")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  picture: {
    width: 100,
    height: 100
  }
});
