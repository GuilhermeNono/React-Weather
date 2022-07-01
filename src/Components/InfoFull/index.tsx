import React from 'react';
import InfoToday from '../InfoToday';
import InfoWeek from '../InfoWeek';
import { Container,HourWrapper, DayliInfoWrapper} from './styles';

const InfoFull: React.FC = () => {

  return (
    <Container>
        <HourWrapper>teste</HourWrapper>
        <DayliInfoWrapper>
            <InfoToday />
            <InfoWeek />
        </DayliInfoWrapper>
    </Container>
  );
}

export default InfoFull;