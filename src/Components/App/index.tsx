import React, { useEffect, useState } from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import InfoCity from "../InfoCity";
import InfoFull from "../InfoFull";
import axios, { AxiosError, AxiosResponse } from "axios";
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
  const [infoWeather, setInfoWeather] = useState<InfoWeather>();

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
      temperature: `${Weather.data[0].Temperature.Metric.Value}C`,
    };
  }

  useEffect(() => {
    console.log(infoWeather);
  }, [infoWeather]);

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
      <InfoFull />
      <GlobalStyles />
    </Container>
  );
};

export default App;
