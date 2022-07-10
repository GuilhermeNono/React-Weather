import React from 'react';

import { Container,Status,City,UFCountry,Temperature} from './styles';

interface Props{
  City?:string;
  statusCity?:string;
  UfCountry?: string;
  TemperatureCity?: string;
}

const InfoCity: React.FC<Props> = (props:Props) => {
  return (
    <Container>
        <Status>{props.statusCity ? props.statusCity : "Predominantemente ensolarado"}</Status>
        <City>{props.City ? props.City : "Igaraçu do tietê"}</City>
        <UFCountry>{props.UfCountry ? props.UfCountry : "São Paulo - Brasil"}</UFCountry>
        <Temperature>{props.TemperatureCity ? props.TemperatureCity : "34°"}</Temperature>
    </Container>
  );
}

export default InfoCity;