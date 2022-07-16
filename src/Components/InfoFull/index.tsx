import React from 'react';
import InfoToday from '../InfoToday';
import InfoWeek from '../InfoWeek';
import HourCard from '../HourCard'
import { Container,HourWrapper, DayliInfoWrapper} from './styles';
import { InfoFiveDaysI } from '../App';

interface Props{
  InfoArrayHourlyForecast?:{
    "Time":string;
    "MaxTemperature":string;
  }[];

  InfoTodayI:any;
  InfoCardData:InfoFiveDaysI[];
}

const InfoFull: React.FC<Props> = ({InfoArrayHourlyForecast, InfoTodayI, InfoCardData}) => {

  return (
    <Container>
        <HourWrapper>
          <HourCard Hour={`${InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "08:00" : InfoArrayHourlyForecast[0].Time}`} Temperature={InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "31°" : InfoArrayHourlyForecast[0].MaxTemperature}/>
          <HourCard Hour={`${InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "09:00" : InfoArrayHourlyForecast[1].Time}`} Temperature={InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "31°" : InfoArrayHourlyForecast[1].MaxTemperature}/>
          <HourCard Hour={`${InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "10:00" : InfoArrayHourlyForecast[2].Time}`} Temperature={InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "31°" : InfoArrayHourlyForecast[2].MaxTemperature}/>
          <HourCard Hour={`${InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "11:00" : InfoArrayHourlyForecast[3].Time}`} Temperature={InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "31°" : InfoArrayHourlyForecast[3].MaxTemperature}/>
          <HourCard Hour={`${InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "12:00" : InfoArrayHourlyForecast[4].Time}`} Temperature={InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "31°" : InfoArrayHourlyForecast[4].MaxTemperature}/>
          <HourCard Hour={`${InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "13:00" : InfoArrayHourlyForecast[5].Time}`} Temperature={InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "31°" : InfoArrayHourlyForecast[5].MaxTemperature}/>
          <HourCard Hour={`${InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "14:00" : InfoArrayHourlyForecast[6].Time}`} Temperature={InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "31°" : InfoArrayHourlyForecast[6].MaxTemperature}/>
          <HourCard Hour={`${InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "15:00" : InfoArrayHourlyForecast[7].Time}`} Temperature={InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "31°" : InfoArrayHourlyForecast[7].MaxTemperature}/>
          <HourCard Hour={`${InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "16:00" : InfoArrayHourlyForecast[8].Time}`} Temperature={InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "31°" : InfoArrayHourlyForecast[8].MaxTemperature}/>
          <HourCard Hour={`${InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "17:00" : InfoArrayHourlyForecast[9].Time}`} Temperature={InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "31°" : InfoArrayHourlyForecast[9].MaxTemperature}/>
          <HourCard Hour={`${InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "18:00" : InfoArrayHourlyForecast[10].Time}`} Temperature={InfoArrayHourlyForecast?.length === 0 || !InfoArrayHourlyForecast ? "31°" : InfoArrayHourlyForecast[10].MaxTemperature}/>
        </HourWrapper>
        <DayliInfoWrapper>
            <InfoToday infoToday={InfoTodayI}/>
            <InfoWeek CardData={InfoCardData}/>
        </DayliInfoWrapper>
    </Container>
  );
}

export default InfoFull;