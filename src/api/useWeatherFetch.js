import { useState, useEffect } from "react";

const useWeatherFetch = (city) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      //wip
    };

    getData();
  });

  return data;
};

export default useWeatherFetch;
