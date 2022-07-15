import { Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import React, { PureComponent } from "react";
import { Image } from "react-native";

const Onboardingscreen = ({ navigation }) => {
  console.log("in onboard");

  return (
    <Onboarding
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/onboard1.jpg")}
              style={{ width: 150, height: 150 }}
            />
          ),
          title: "Onboarding screen 1",
          subtitle: "Onboarding screen subs",
        },
        {
          backgroundColor: "#000000",
          image: (
            <Image
              source={require("../assets/onboard2.jpg")}
              style={{ width: 150, height: 150 }}
            />
          ),
          title: "Onboarding screen 2",
          subtitle: "Onboarding screen subs",
        },
        {
          backgroundColor: "#ffff",
          image: (
            <Image
              source={require("../assets/onboard3.png")}
              style={{ width: 150, height: 150 }}
            />
          ),
          title: "Onboarding screen 3",
          subtitle: "Onboarding screen subs",
        },
      ]}
    />
  );
};
export default Onboardingscreen;
