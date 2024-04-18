import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { SharedValue } from "react-native-reanimated";
import { transform } from "@babel/core";
import { AntDesign } from "@expo/vector-icons";
type Props = {
  progress: SharedValue<number>;
};
const Chevron = ({ progress }: Props) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * -180}deg` }],
  }));
  return (
    <Animated.View style={iconStyle}>
      {/* /<Image source={require("../assets/Chevron.png")} style={styles.chevron} /> */}
      <AntDesign name="downcircleo" size={24} color={"red"} />
    </Animated.View>
  );
};

export default Chevron;

const styles = StyleSheet.create({
  chevron: {
    height: 24,
    width: 24,
  },
  iconStyle: {},
});
