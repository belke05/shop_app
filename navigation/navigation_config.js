import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

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
  },
  Cart: {
    screen: Cart
  }
});

const MainNavigator = createDrawerNavigator(
  {
    Shop: {
      screen: AppNavigator,
      navigationOptions: {
        drawerLabel: "Shop"
      }
    },
    Orders: {
      screen: Orders,
      navigationOptions: {
        drawerLabel: "Orders"
      }
    },
    Manage_Products: {
      screen: Product_Management,
      navigationOptions: {
        drawerLabel: "Manage Products"
      }
    }
  }
  // {
  //   contentOptions: {
  //     activeTintColor: colors.darkred,
  //     inactiveTintColor: colors.lightred,
  //     labelStyle: {
  //       fontWeight: "bold"
  //     }
  //   }
  // }
);

// ------

export default createAppContainer(MainNavigator);
