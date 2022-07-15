import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Login";
import Onboardingscreen from "./src/Onboardingscreen";
import Splash from "./src/Splash";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <Text style={styles.container}>adsdasd</Text>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="Onboard"
            // component={Login}
            component={Onboardingscreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  splashstyle: {
    backgroundColor: "#b41a1af",
    marginTop: 10,
  },
});
