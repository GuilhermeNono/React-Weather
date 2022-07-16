import React from "react";
import { InfoFiveDaysI } from "../App";

import {
  Container,
  InfoUp,
  Date,
  IconStatus,
  LineDivision,
  InfoDown,
  IconPrecipitation,
  Precipitation,
} from "./styles";

interface Props {
    infoDays:InfoFiveDaysI;
}

const Card: React.FC<Props> = ({infoDays}) => {
  return (
    <Container>
        <InfoUp>
          <Date>{infoDays ? infoDays.Date : "00/00"}</Date>
          <IconStatus></IconStatus>
        </InfoUp>

        <LineDivision></LineDivision>

        <InfoDown>
          <IconPrecipitation></IconPrecipitation>
          <Precipitation>{infoDays ? infoDays.Precipitation : "0%"}</Precipitation>
        </InfoDown>
    </Container>
  );
};

export default Card;
