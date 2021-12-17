import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import WeatherBox from "../WeatherBox";
import style from "./style";

const WeatherList = (props) => {
  const data = props.data;

  return (
    <View style={style.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <WeatherBox data={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollingIndicator={false}
      />
    </View>
  );
};

export default WeatherList;
