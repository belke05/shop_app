import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductInfo from "../components/ProductInfo";
import CustomButton from "../components/CustomButton";
// import Modal from "../components/Modal";

export default function Cart(props) {
  const USERCART = useSelector(state => state.products.usercart);
  const PRODUCTS_IN_CART = USERCART.products;
  const TOTAL_PRICE = USERCART.totalprice;

  const renderProduct = itemData => {
    const { item } = itemData;
    return <ProductInfo product={item.item} qty={item.qty} />;
  };

  return (
    <View style={styles.container}>
      <Text>Total Sum ${TOTAL_PRICE}</Text>
      <CustomButton title="order" />
      <FlatList
        style={{ width: "100%" }}
        data={PRODUCTS_IN_CART}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
      ></FlatList>
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
