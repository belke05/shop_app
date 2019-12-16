import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
// import Modal from "../components/Modal";

export default function Cart(props) {
  const USERCART = useSelector(state => state.products.usercart);
  const PRODUCTS_IN_CART = USERCART.products;
  const TOTAL_PRICE = USERCART.totalprice;
  console.log(PRODUCTS_IN_CART);
  return (
    <View style={styles.container}>
      <Text>{TOTAL_PRICE}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
