import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";
import ForecastScreen from "./src/screens/ForecastScreen";

export default function App() {
  const Root = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen name="MainScreen" component={MainScreen} />
        <Root.Screen name="ForecastScreen" component={ForecastScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
