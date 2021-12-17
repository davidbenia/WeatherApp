import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import Header from "../commonComponents/Header";
import Forecast from "./components/Forecast";
import style from "./style";

const ForecastScreen = ({ route }) => {
  const data = route.params.data;
  const [daily, setDaily] = useState(null);

  useEffect(() => {
    setDaily(data);
  }, [daily]);

  return (
    <View style={style.container}>
      <Header />
      <ScrollView>
        <Forecast data={data[1]} />
        <Forecast data={data[2]} />
        <Forecast data={data[3]} />
        <Forecast data={data[4]} />
        <Forecast data={data[5]} />
        <Forecast data={data[6]} />
        <Forecast data={data[7]} />
      </ScrollView>
    </View>
  );
};

export default ForecastScreen;
