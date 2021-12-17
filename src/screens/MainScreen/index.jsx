import React, { useState, useEffect } from "react";
import { View } from "react-native";
import HeaderSearch from "./components/HeaderSearch";
import WeatherList from "./components/WeatherList";
import useWeatherFetch from "../../api/useWeatherFetch";
import style from "./style";

const MainScreen = ({ navigation }) => {
  const [data, setData] = useState(null);

  const tbilisi = useWeatherFetch([41.72058749494492, 44.827169632485024]);
  const batumi = useWeatherFetch([41.616223371719116, 41.63425426846371]);
  const qutaisi = useWeatherFetch([42.26647991062615, 42.722115785303636]);

  const searchHandler = (input) => {
    let searchedElement = data.filter((item) => item.name == input);
    let newData = data.filter((item) => item.name != input);
    newData.unshift(searchedElement[0]);

    setData(newData);
  };

  useEffect(() => {
    if (
      tbilisi == "Depleted requests" ||
      batumi == "Depleted requests" ||
      qutaisi == "Depleted requests"
    )
      console.alert("Unable to fetch data");

    setData([
      { name: "Tbilisi", report: tbilisi },
      { name: "Batumi", report: batumi },
      { name: "Qutaisi", report: qutaisi },
    ]);
  }, [tbilisi, batumi, qutaisi]);

  return (
    <View style={style.container}>
      <HeaderSearch handler={searchHandler} />
      <WeatherList data={data} navigation={navigation} />
    </View>
  );
};

export default MainScreen;
