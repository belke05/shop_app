import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// ---------- screens ----------

import Cart from "../screens/Cart";
import Details from "../screens/Details";
import Home from "../screens/Home";
import Orders from "../screens/Orders";
import Prodect_Edit from "../screens/Product_Edit";
import Product_Management from "../screens/Product_Management";

// ----------------------------

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Details: {
    screen: Details
  }
});

export default createAppContainer(AppNavigator);
