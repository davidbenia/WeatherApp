import { useState, useEffect } from "react";

const useWeatherFetch = (coordinates) => {
  const [data, setData] = useState(null);
  const [latitude, longtitude] = coordinates;

  const parameters = {
    lat: latitude,
    lon: longtitude,
    exclude: "hourly,minutely,alerts",
    units: "metric",
    APPID: "5845e2ce5feabc7a12d8d3de66ba0c49",
  };

  const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${parameters.lat}&lon=${parameters.lon}&exclude=${parameters.exclude}&units=${parameters.units}&APPID=${parameters.APPID}`;

  useEffect(() => {
    const getData = async () => {
      // Not sure why this doesn't work
      //
      // let response = await fetch(
      //   "https://api.openweathermap.org/data/2.5/onecall",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(parameters),
      //   }
      // );

      try {
        let response = await fetch(endpoint);

        response = await response.json();

        setData(response);
      } catch {
        setData("Depleted requests");
      }
    };

    getData();
  }, []);

  return data;
};

export default useWeatherFetch;
