import React from "react";
import CustomButton from "./CustomButton";
import { StyleSheet, Text, Dimensions, View, Image } from "react-native";

export default function ProductContainer(props) {
  const product = props.product;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Image style={styles.picture} source={{ uri: product.picture_url }} />
      <View style={styles.btnContainer}>
        <CustomButton
          style={{ margin: 10 }}
          title="details"
          onPressHandler={() =>
            props.onPressHandlerDetails(product.id, product.name)
          }
        />
        <Text style={styles.price}>{product.price}$</Text>
        <CustomButton
          style={{ margin: 10 }}
          title="cart"
          onPressHandler={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15
  },
  picture: {
    marginTop: 10,
    width: Dimensions.get("screen").width * 0.6,
    height: Dimensions.get("screen").height * 0.2
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  price: {
    textAlign: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  }
});
