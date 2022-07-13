import React from 'react';
import {Container, Hour, Icon, Temperature} from './styles';

interface Props{
  Hour?:string;
  Temperature?:string | number;
}

const HourCard: React.FC<Props> = (props:Props) => {

  return (
    <Container>
      <Hour>{props.Hour ? props.Hour : "Agora"}</Hour>
      <Icon></Icon>
      <Temperature>{props.Temperature ? props.Temperature : "31°"}</Temperature>
    </Container>
  );
}

export default HourCard;