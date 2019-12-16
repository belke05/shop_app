import React from "react";
import CustomButton from "./CustomButton";
import { remove_item_cart } from "../redux_config/actions";
import { StyleSheet, Text, Dimensions, View, Image, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function ProductInfo(props) {
  const dispatch = useDispatch();

  const product = props.product;
  const qty = props.qty;
  // const onPressHandler = () => {
  //   dispatch(update_cart(product.id));
  //   Alert.alert(
  //     `${product.name} was added`,
  //     "look in your cart for more details",
  //     [{ text: "OK", onPress: () => console.log("OK Pressed") }],
  //     { cancelable: false }
  //   );
  // };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>#{qty}</Text>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.title}>{product.price}</Text>
        <CustomButton title="delete" />
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
  innerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontWeight: "bold",
    fontSize: 18
  }
});
