import React, { useState } from "react";
import Info from "../info/Info";
import Form from "../form/Form";
import Data from "../data/Data";
import { WrapApp, AppData, AppInfo } from "./AppStyle";

import { API_KEY } from "../../api";

const App = () => {
  
  const [state, setState] = useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    icon: undefined,
    error: undefined,
  })

  const gettingData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();

    const leadingZero = (num) => `0${num}`.slice(-2);

    const formatTime = (date) => [date.getHours(), date.getMinutes(), date.getSeconds()]
      .map(leadingZero)
      .join(':');

    try {
      if (city) {
        const url = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}`
        );
        const data = await url.json();

        let celcius = Math.round(parseFloat(data.main.temp)-273.15);
        let sunset = data.sys.sunset;
        let sunsetDateNow = new Date(sunset * 1000);
        const sunsetDateNormal = formatTime(sunsetDateNow);
        let sunrise = data.sys.sunrise;
        let sunriseDateNow = new Date(sunrise * 1000);
        const sunriseDateNormal = formatTime(sunriseDateNow);
        const icon = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`

        setState({
          temp: celcius,
          city: data.name,
          country: data.sys.country,
          sunrise: sunriseDateNormal,
          sunset: sunsetDateNormal,
          icon: iconUrl,
          error: "",
        });
      } else {
        setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          sunrise: undefined,
          sunset: undefined,
          icon: undefined,
          error: "Введите название города"
        });
      }
    } catch (error) {
      alert(`Город ${city} не найден!`);
    } 
  };

  return (
    <WrapApp>
      <AppInfo>
        <Info />
      </AppInfo>
      <AppData>
        <Form getData={gettingData} />
        <Data data={state} />
      </AppData>
    </WrapApp>
  );
}

export default App;
