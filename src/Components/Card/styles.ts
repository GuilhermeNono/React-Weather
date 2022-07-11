import styled from 'styled-components';

export const Container = styled.div`
width: 67px;
height: 180px;
background: #B6CCBD;
border-radius: 17px;
filter: drop-shadow(4px 7px 0px rgba(0, 0, 0, 0.25));
display: flex;
flex-direction: column;
align-items: center;
`;

export const InfoUp = styled.div`
width: 100%;
height: 100%;
display: flex;
gap: 6px;
flex-direction: column;
align-items: center;
`;

export const InfoDown = styled.div`
width: 100%;
height: 100%;
display: flex;
gap: 6px;
flex-direction: column;
align-items: center;
justify-content: flex-end;
margin-bottom: 5px;
`;

export const IconStatus = styled.div`
width: 36px;
height: 36px;
background-image: url("./images/clarity_sun-solid.svg");
padding-top: 5px;
`;

export const Date = styled.div`
font-size: 20px;
color: #000;
padding-top: 5px;
`;

export const IconPrecipitation = styled.div`
width: 36px;
height: 36px;
background-image: url("./images/carbon_rain-drop.svg");
padding-top: 5px;
`;

export const Precipitation = styled.div`
color: #484848;
font-size: 15px;
`;

export const LineDivision = styled.div`
margin-top: 5px;
  width: 90%;
  border: 1px solid #909E95;
`;