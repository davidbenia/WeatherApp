import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Header from "./components/Header";
import WeatherList from "./components/WeatherList";
import useWeatherFetch from "../../api/useWeatherFetch";
import style from "./style";

const MainScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let tbilisi = useWeatherFetch(null);
    let batumi = useWeatherFetch(null);
    let qutaisi = useWeatherFetch(null);

    setData([tbilisi, batumi, qutaisi]);
  });

  return (
    <View style={style.container}>
      <Header />
      <WeatherList data={data} />
    </View>
  );
};

export default MainScreen;
