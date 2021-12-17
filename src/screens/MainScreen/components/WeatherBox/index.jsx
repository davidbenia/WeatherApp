import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Moment from "moment";
import style from "./style";

const WeatherBox = (props) => {
  const { data, navigation } = props;

  const currentData = data.report.current;
  const forecastData = data.report.daily;

  Moment.locale("en");
  let time = Moment(currentData.dt).format("MMM Mo, h:mm a");

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.touchable}
        onPress={() =>
          navigation.push("ForecastScreen", { data: forecastData })
        }
      >
        <Text style={style.cityName}>{data.name} (View 7 day forecast)</Text>
      </TouchableOpacity>

      <View>
        <Text style={style.date}>{time}</Text>
      </View>

      <View style={style.information}>
        <View>
          <Text style={style.temp}>{`${Math.round(currentData.temp)} °C`}</Text>
          <Text style={style.feelTemp}>{`Feels like ${Math.round(
            currentData.feels_like
          )}`}</Text>
        </View>

        <View style={style.weather}>
          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${currentData.weather[0].icon}.png`,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{ fontSize: 20, color: "white" }}>
            {currentData.weather[0].description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherBox;
