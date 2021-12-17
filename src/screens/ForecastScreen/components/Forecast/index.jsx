import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import Moment from "moment";
import style from "./style";

const Forecast = (props) => {
  const data = props.data;

  Moment.locale("en");
  let time = Moment(data.dt).format("MMM Mo, h:mm a");

  let tempDay = data.temp.day;
  let tempNight = data.temp.night;

  return (
    <View style={style.container}>
      <View>
        <Text style={style.date}>{time}</Text>
      </View>

      <View style={style.information}>
        <View>
          <Text style={style.temp}>{`Day ${Math.round(tempDay)} °C`}</Text>
          <Text style={style.temp}>{`Night ${Math.round(tempNight)} °C`}</Text>
        </View>

        <View style={style.weather}>
          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{ fontSize: 20, color: "white" }}>
            {data.weather[0].description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Forecast;
