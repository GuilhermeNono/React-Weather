import React from 'react';
import Card from '../Card';

import { Container,Title,Line,CardContainer} from './styles';

const InfoWeek: React.FC = () => {
  return (
    <Container>
        <Title>Previsões dos proximos 5 dias</Title>
        <Line></Line>
        <CardContainer>
          {/* TODO: Preencher os campos dos cards com seus respectivos valores. */}
          {/* TODO: Encontrar um metodo de colocar icones diferentes de tempos referente aos dados recebidos pela API. */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
    </Container>
  );
}

export default InfoWeek;