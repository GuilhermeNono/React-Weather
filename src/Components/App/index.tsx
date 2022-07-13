import React, { useEffect, useState } from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import InfoCity from "../InfoCity";
import InfoFull from "../InfoFull";
import axios, { AxiosResponse } from "axios";
import SearchBox from "../SearchBox";

import { Container, StatusSunMoon } from "./styles";

//fetch(`${process.env.WEATHER_BASE}/locations/v1/cities/search?q=${newQuery}&apikey=${process.env.WEATHER_TOKEN}&language=pt-br`)

interface InfoWeather {
  statusCityWeather: string;
  cityName: string;
  countryUF: string;
  temperature: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [weather, setWeather] = useState<any>({});
  const [location, setLocation] = useState<any>({});
  const [hourly, setHourly] = useState<any[]>([]);
  const [infoWeather, setInfoWeather] = useState<InfoWeather>();
  const [infoHourly, setInfoHourly] = useState<any[]>([]);

  async function search(e: any) {
    if (e.key === "Enter") {
      var locationInfo = await axios.get(
        `${process.env.REACT_APP_WEATHER_BASE}/locations/v1/cities/search?q=${query}&apikey=${process.env.REACT_APP_WEATHER_TOKEN}&language=pt-br`
      );
      setLocation(locationInfo.data[0]);

      var currentWeatherStatus = await axios.get(
        `${process.env.REACT_APP_WEATHER_BASE}/currentconditions/v1/${locationInfo.data[0].Key}?apikey=${process.env.REACT_APP_WEATHER_TOKEN}&language=pt-br`
      );
      setWeather(currentWeatherStatus.data);

      setInfoWeather(weatherFormatter(locationInfo, currentWeatherStatus));
    }
  }

  function weatherFormatter(
    locationInfo: AxiosResponse,
    Weather: AxiosResponse
  ) {
    return {
      cityName: `${locationInfo.data[0].LocalizedName}`,
      countryUF: `${locationInfo.data[0].AdministrativeArea.LocalizedName} - ${locationInfo.data[0].Country.LocalizedName}`,
      statusCityWeather: `${Weather.data[0].WeatherText}`,
      temperature: `${Weather.data[0].Temperature.Metric.Value}°`,
    };
  }

  async function getNext12HoursForecast(LocationKey:string) {
    let hoursForecast = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${LocationKey}?apikey=${process.env.REACT_APP_WEATHER_TOKEN}&language=pt-br&metric=true`);
    let hoursAndTemperature:any[] = [];
    hoursForecast.data.forEach((ss:any) => {
        hoursAndTemperature.push(ss)
    });
    setHourly(hoursAndTemperature);
  }

  async function hourlyFormatter() {
    let newArray:any[] = []
    let newTime;
    let newTemperature;

    hourly.forEach(element => {
      newTime = element.DateTime.slice(11, -9);
      newTemperature = `${element.Temperature.Value}°`;
      newArray.push({"Time": newTime, "MaxTemperature": newTemperature})
    });
    setInfoHourly(newArray)
  }

  useEffect(() => {
    if(location.Key){
      getNext12HoursForecast(location.Key)
    }
  }, [location]);

  useEffect(() => {
    if(hourly.length !== 0){
      hourlyFormatter();
    }
  }, [hourly])

  return (
    <Container>
      <StatusSunMoon></StatusSunMoon>
      <SearchBox query={query} setQuery={setQuery} search={search} />
      <InfoCity
        City={infoWeather?.cityName}
        statusCity={infoWeather?.statusCityWeather}
        UfCountry={infoWeather?.countryUF}
        TemperatureCity={infoWeather?.temperature}
      />
      {/* TODO: Popular o componente InfoToday com as informações */}
      <InfoFull InfoArrayHourlyForecast={infoHourly}/>
      <GlobalStyles />
    </Container>
  );
};

export default App;
