import React from "react";
import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";
import ProductContainer from "../components/ProductContainer";
import { useSelector } from "react-redux";

export default function Home(props) {
  const PRODUCTS = useSelector(state => state.products.availableproducts);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={PRODUCTS}
        renderItem={({ item }) => (
          <ProductContainer product={item} navigation={props.navigation} />
        )}
        keyExtractor={item => item.id}
      ></FlatList>
      <Text>{PRODUCTS}--</Text>
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
  safeAreaView: {
    flex: 1
  }
});
