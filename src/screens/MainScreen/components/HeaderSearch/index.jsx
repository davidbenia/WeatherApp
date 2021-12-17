import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import Header from "../../../commonComponents/Header";

export default function HeaderSearch(props) {
  const [text, setText] = useState(null);

  return (
    <View>
      <Header />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          top: -320,
        }}
      >
        <TextInput
          style={{
            backgroundColor: "white",
            width: 200,
            marginRight: 10,
          }}
          placeholder="Search for a city"
          onChangeText={(text) =>
            setText(`${text.charAt(0).toUpperCase()}${text.slice(1)}`)
          }
        />

        <Button title={"search"} onPress={() => props.handler(text)} />
      </View>
    </View>
  );
}
