import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ProductContainer from "../components/ProductContainer";
import { useSelector } from "react-redux";

export default function Product_Management(props) {
  const USER_PRODUCTS = useSelector(state => state.products.userproducts);

  const renderProduct = itemData => {
    const { item } = itemData;
    return (
      <ProductContainer
        product={item}
        onPressHandlerDetails={() => {
          //onPressHandlerDetails
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={USER_PRODUCTS}
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
