import React, { useEffect, useState } from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import InfoCity from "../InfoCity";
import InfoFull from "../InfoFull";
import axios, { AxiosResponse } from "axios";
import SearchBox from "../SearchBox";

import { Container, StatusSunMoon } from "./styles";

//fetch(`${process.env.WEATHER_BASE}/locations/v1/cities/search?q=${newQuery}&apikey=${process.env.WEATHER_TOKEN}&language=pt-br`)

interface InfoWeatherI {
  statusCityWeather: string;
  cityName: string;
  countryUF: string;
  temperature: string;
  isDay: boolean;
}

export interface InfoTodayI {
  RealFeelTemperature: string;
  Precipitation: string;
  windSpeed: string;
  Humidity: string;
}

export interface InfoFiveDaysI {
  Date: string;
  Precipitation: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [location, setLocation] = useState<any>({});
  const [hourly, setHourly] = useState<any[]>([]);
  const [infoWeather, setInfoWeather] = useState<InfoWeatherI>();
  const [infoHourly, setInfoHourly] = useState<any[]>([]);
  const [infoToday, setInfoToday] = useState<InfoTodayI>();
  const [infoFiveNextDays, setInfoFiveNextDays] = useState<InfoFiveDaysI[]>([]);

  async function search(e: any) {
    if (e.key === "Enter") {
      var locationInfo = await axios.get(
        `${process.env.REACT_APP_WEATHER_BASE}/locations/v1/cities/search?q=${query}&apikey=${process.env.REACT_APP_WEATHER_TOKEN}&language=pt-br&details=true`
      );
      if (!locationInfo.data[0]) return;
      setLocation(locationInfo.data[0]);

      var currentWeatherStatus = await axios.get(
        `${process.env.REACT_APP_WEATHER_BASE}/currentconditions/v1/${locationInfo.data[0].Key}?apikey=${process.env.REACT_APP_WEATHER_TOKEN}&language=pt-br&details=true`
      );

      var fiveNextDaysForecast = await axios.get(
        `${process.env.REACT_APP_WEATHER_BASE}/forecasts/v1/daily/5day/${locationInfo.data[0].Key}?apikey=${process.env.REACT_APP_WEATHER_TOKEN}&language=pt-br&details=true`
      );

      setInfoWeather(weatherFormatter(locationInfo, currentWeatherStatus));
      setInfoToday(todayWeatherFormatter(currentWeatherStatus));
      setInfoFiveNextDays(nextFiveDaysFormatter(fiveNextDaysForecast));
    }
  }

  function weatherFormatter(
    locationInfo: AxiosResponse,
    Weather: AxiosResponse
  ): InfoWeatherI {
    return {
      cityName: `${locationInfo.data[0].LocalizedName}`,
      countryUF: `${locationInfo.data[0].AdministrativeArea.LocalizedName} - ${locationInfo.data[0].Country.LocalizedName}`,
      statusCityWeather: `${Weather.data[0].WeatherText}`,
      temperature: `${Weather.data[0].Temperature.Metric.Value}°C`,
      isDay: Weather.data[0].IsDayTime,
    };
  }

  function nextFiveDaysFormatter(
    fiveNextDaysForecast: AxiosResponse
  ): InfoFiveDaysI[] {
    var newArray: InfoFiveDaysI[] = [];
    let newDate;
    fiveNextDaysForecast.data.DailyForecasts.forEach((element: any) => {
      newDate = element.Date.slice(5, -15).split("-").reverse().join("/");
      newArray.push({
        Date: `${newDate}`,
        Precipitation: `${element.Day.RainProbability}%`,
      });
    });

    return newArray;
  }

  function todayWeatherFormatter(currentWeather: AxiosResponse): InfoTodayI {
    return {
      RealFeelTemperature: `${currentWeather.data[0].RealFeelTemperature.Metric.Value}°C`,
      Humidity: `${currentWeather.data[0].RelativeHumidity}%`,
      Precipitation: `${currentWeather.data[0].PrecipitationSummary.Precipitation.Metric.Value}%`,
      windSpeed: `${currentWeather.data[0].Wind.Speed.Metric.Value}km/h`,
    };
  }

  async function getNext12HoursForecast(LocationKey: string) {
    let hoursForecast = await axios.get(
      `${process.env.REACT_APP_WEATHER_BASE}/forecasts/v1/hourly/12hour/${LocationKey}?apikey=${process.env.REACT_APP_WEATHER_TOKEN}&language=pt-br&metric=true`
    );
    let hoursAndTemperature: any[] = [];
    hoursForecast.data.forEach((ss: any) => {
      hoursAndTemperature.push(ss);
    });
    setHourly(hoursAndTemperature);
  }

  useEffect(() => {
    if (location.Key) {
      getNext12HoursForecast(location.Key);
    }
  }, [location]);

  useEffect(() => {
    if (hourly.length !== 0) {
      let newArray: any[] = [];
      let newTime;
      let newTemperature;

      hourly.forEach((element) => {
        newTime = element.DateTime.slice(11, -9);
        newTemperature = element.Temperature.Value + "°";
        newArray.push({ Time: newTime, MaxTemperature: newTemperature });
      });
      setInfoHourly(newArray);
    }
  }, [hourly]);

  return (
    <Container
      isDay={infoWeather?.isDay === undefined ? false : infoWeather?.isDay}
    >
      <StatusSunMoon
        isDay={infoWeather?.isDay === undefined ? false : infoWeather?.isDay}
      ></StatusSunMoon>
      <SearchBox query={query} setQuery={setQuery} search={search} />
      <InfoCity
        City={infoWeather?.cityName}
        statusCity={infoWeather?.statusCityWeather}
        UfCountry={infoWeather?.countryUF}
        TemperatureCity={infoWeather?.temperature}
      />
      <InfoFull
        InfoTodayI={infoToday}
        InfoArrayHourlyForecast={infoHourly}
        InfoCardData={infoFiveNextDays}
      />
      <GlobalStyles />
    </Container>
  );
};

export default App;
