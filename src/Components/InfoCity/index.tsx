import React from 'react';

import { Container,Status,City,UFCountry,Temperature} from './styles';

const InfoCity: React.FC = () => {
  return (
    <Container>
        <Status>Predominantemente ensolarado</Status>
        <City>Igaraçu do Tietê</City>
        <UFCountry>São Paulo - Brasil</UFCountry>
        <Temperature>34°</Temperature>
    </Container>
  );
}

export default InfoCity;