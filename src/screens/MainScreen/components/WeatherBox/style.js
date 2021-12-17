import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: "#48cae4",
    padding: 10,
  },

  touchable: {
    backgroundColor: "#0077b6",
    alignSelf: "flex-start",
    borderWidth: 0,
    borderRadius: 15,
    padding: 10,
  },

  cityName: {
    fontSize: 25,
    color: "white",
  },

  date: {
    marginTop: 10,
    fontSize: 25,
    color: "#0077b6",
    backgroundColor: "#caf0f8",
    alignSelf: "flex-start",
    padding: 5,
  },

  information: {
    marginTop: 50,
    marginLeft: 100,
    flexDirection: "column",
  },

  temp: {
    color: "white",
    fontSize: 70,
    fontWeight: "bold",
  },
  feelTemp: {
    color: "white",
    fontSize: 30,
  },

  weather: {
    display: "flex",
    width: 200,
    height: 200,
    marginTop: 50,
    backgroundColor: "#00b4d8",
    borderWidth: 0,
    borderRadius: 15,
    padding: 30,
  },
});

export default style;
