import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import CustomButton from "../components/CustomButton";

export default function Detail(props) {
  const productId = props.navigation.getParam("productId");
  console.log("prod id", productId);
  const PRODUCT = useSelector(state => {
    return state.products.availableproducts.find(
      product => product.id === productId
    );
  });
  return (
    <View style={styles.container}>
      <Image style={styles.picture} source={{ uri: PRODUCT.picture_url }} />
      <View style={styles.info}>
        <Text style={{ ...styles.infoItem }}>{PRODUCT.price}</Text>
        <Text style={{ ...styles.infoItem }}>{PRODUCT.description}</Text>
        <CustomButton
          style={{ ...styles.infoItem }}
          title="+ cart"
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
    justifyContent: "flex-start"
  },
  picture: {
    width: Dimensions.get("screen").width,
    height: 350
  },
  info: {
    flex: 1,
    marginTop: "5%",
    alignItems: "center"
  },
  infoItem: {
    margin: 20
  }
});

Detail.navigationOptions = navigationData => {
  const title = navigationData.navigation.getParam("productName");
  return {
    headerTitle: title
  };
};
