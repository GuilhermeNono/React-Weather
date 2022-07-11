import React from "react";

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
    Date?:string;
    Precipitation?:string | number;
}

const Card: React.FC<Props> = (props:Props) => {
  return (
    <Container>
        <InfoUp>
          <Date>{props.Date ? props.Date : "00/00"}</Date>
          <IconStatus></IconStatus>
        </InfoUp>

        <LineDivision></LineDivision>

        <InfoDown>
          <IconPrecipitation></IconPrecipitation>
          <Precipitation>{props.Date ? props.Date : "0%"}</Precipitation>
        </InfoDown>
    </Container>
  );
};

export default Card;
