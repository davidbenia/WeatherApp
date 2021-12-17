import React, { useEffect, useState } from "react";
import { View, FlatList, Dimensions } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import WeatherBox from "../WeatherBox";
import style from "./style";

const WeatherList = (props) => {
  const { data, navigation } = props;
  const [counter, setCounter] = useState(0);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (data != null) {
      for (let i = 0; i < data.length; ++i) {
        if (data[i].report != null) setCounter((prev) => prev + 1);
      }
    }

    if (counter == 3) setValid(true);
  }, [data]);

  return valid ? (
    <View style={style.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <WeatherBox data={item} navigation={navigation} />
        )}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollingIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  ) : (
    <Spinner visible={true} />
  );
};

export default WeatherList;
