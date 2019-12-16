import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CustomButton(props) {
  const { onPressHandler, title } = props;
  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={0.2}>
      <View style={{ ...styles.container, ...props.style }}>
        <Text style={{ ...styles.button, ...props.textstyle }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: "blue",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 4,
    textAlign: "center"
  }
});
