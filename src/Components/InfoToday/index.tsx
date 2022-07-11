import React from "react";

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
} from "./styles";

const InfoToday: React.FC = () => {
  return (
    // TODO: Trocar os placeholders dos campos de descrição pelas devidas informações
    <Container>
      <Title>Previsão do dia</Title>
      <Line></Line>
      <Informations>

        <InfoLeft>
          <Info>
            <InfoRealFeel>Real Feel</InfoRealFeel>
            <DescRealFeel>29°C</DescRealFeel>
          </Info>

          <Info>
            <InfoWindSpeed>Wind Speed</InfoWindSpeed>
            <DescWindSpeed>11.1km/h</DescWindSpeed>
          </Info>
        </InfoLeft>

        <InfoRight>
          <Info>
            <InfoHumidity>Humidity</InfoHumidity>
            <DescHumidity>84%</DescHumidity>
          </Info>

          <Info>
            <InfoPrecipitation>Precipitation</InfoPrecipitation>
            <DescPrecipitation>0%</DescPrecipitation>
          </Info>
        </InfoRight>

      </Informations>
    </Container>
  );
};

export default InfoToday;
