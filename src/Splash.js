import { Text, View } from "react-native";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

export const Splash = ({ navigation }) => {
  return (
    <LottieView
      // source={require("../assets/animation_l5m1l95l.json")}
      source={require("../assets/animation_l5m1k8ie.json")}
      loop={false}
      autoPlay
      speed={0.9}
      onAnimationFinish={() => {
        // console.log("animation finished!!!!!!!!");
        navigation.navigate("Onboard");
      }}
    />
  );
};

export default Splash;
