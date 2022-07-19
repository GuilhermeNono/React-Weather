import React from "react";
import { InfoFiveDaysI } from "../App";
import Card from "../Card";

import { Container, Title, Line, CardContainer, CardConfig } from "./styles";

interface Props {
  CardData: InfoFiveDaysI[];
}

const InfoWeek: React.FC<Props> = ({ CardData }) => {
  return (
    <Container>
      <CardConfig>
        <Title>Previsões dos proximos 5 dias</Title>
        <Line></Line>
        <CardContainer>
          <Card infoDays={CardData[0]} />
          <Card infoDays={CardData[1]} />
          <Card infoDays={CardData[2]} />
          <Card infoDays={CardData[3]} />
          <Card infoDays={CardData[4]} />
        </CardContainer>
      </CardConfig>
    </Container>
  );
};

export default InfoWeek;
