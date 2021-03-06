import React from "react";
import CustomButton from "./CustomButton";
import { update_cart, remove_item_cart } from "../redux_config/actions";
import { StyleSheet, Text, Dimensions, View, Image, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function ProductContainer(props) {
  const dispatch = useDispatch();

  const { product, isUserList } = props;

  const onPressHandlerCart = () => {
    dispatch(update_cart(product.id));
    Alert.alert(
      `${product.name} was added`,
      "look in your cart for more details",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  const onPressHandlerDelete = () => {
    dispatch(remove_item_cart(product.id)); // needs to be remove item cart
    Alert.alert(
      `${product.name} was deleted`,
      "product was deleted from the store",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Image style={styles.picture} source={{ uri: product.picture_url }} />
      <View style={styles.btnContainer}>
        <CustomButton
          style={{ margin: 10 }}
          title={isUserList ? "edit" : "details"}
          onPressHandler={() =>
            isUserList
              ? null
              : props.onPressHandlerDetails(product.id, product.name)
          }
        />
        <Text style={styles.price}>{product.price}$</Text>
        <CustomButton
          style={{ margin: 10 }}
          title={isUserList ? "delete" : "cart"}
          onPressHandler={() => {
            isUserList ? onPressHandlerDelete() : onPressHandlerCart();
          }}
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
