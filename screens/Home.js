import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ProductContainer from "../components/ProductContainer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderIcon from "../components/HeaderIcon";
import { useSelector } from "react-redux";

export default function Home(props) {
  const PRODUCTS = useSelector(state => state.products.availableproducts);

  const renderProduct = itemData => {
    const { item } = itemData;
    return <ProductContainer product={item} navigation={props.navigation} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  safeAreaView: {
    flex: 1
  }
});

Home.navigationOptions = navigationData => {
  return {
    headerTitle: "shop",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item title="Menu" iconName="ios-cart" onPress={() => {}} />
      </HeaderButtons>
    )
  };
};
