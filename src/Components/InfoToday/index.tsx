import React from "react";
import { InfoTodayI } from "../App";

import {
  Container,
  Title,
  Line,
  Informations,
  InfoLeft,
  InfoRight,
  InfoRealFeel,
  InfoWindSpeed,
  Info,
  DescWindSpeed,
  DescRealFeel,
  InfoHumidity,
  DescHumidity,
  InfoPrecipitation,
  DescPrecipitation,
  CardConfig
} from "./styles";

interface Props {
  infoToday:InfoTodayI;
}

const InfoToday: React.FC<Props> = ({infoToday}) => {
  return (
    <Container>
      <CardConfig>
      <Title>Previsão do dia</Title>
      <Line></Line>
      <Informations>

        <InfoLeft>
          <Info>
            <InfoRealFeel>Real Feel</InfoRealFeel>
            <DescRealFeel>{!infoToday ? "29°C" : infoToday.RealFeelTemperature}</DescRealFeel>
          </Info>

          <Info>
            <InfoWindSpeed>Wind Speed</InfoWindSpeed>
            <DescWindSpeed>{!infoToday ? "11.1km/h" : infoToday.windSpeed}</DescWindSpeed>
          </Info>
        </InfoLeft>

        <InfoRight>
          <Info>
            <InfoHumidity>Humidity</InfoHumidity>
            <DescHumidity>{!infoToday ? "84%" : infoToday.Humidity}</DescHumidity>
          </Info>

          <Info>
            <InfoPrecipitation>Precipitation</InfoPrecipitation>
            <DescPrecipitation>{!infoToday ? "0%" : infoToday.Precipitation}</DescPrecipitation>
          </Info>
        </InfoRight>

      </Informations>
      </CardConfig>
    </Container>
  );
};

export default InfoToday;
