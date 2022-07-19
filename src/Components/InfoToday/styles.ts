import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: end;

@media (max-width: 900px) {
  justify-content: center;
}
`;

export const CardConfig = styled.div`
width: 600px;
height: 279px;
background: #E8FFEF;
border: 1px solid #D2E8D9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px 40px 0px 0px;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 1250px) {
  width: 400px;
  height: 279px;
}

@media (max-width: 900px) {
  width: 95%;
  max-width: 100%;
  border-radius: 40px 40px 40px 40px;
}
`;

export const Title = styled.div`
width: 100%;
text-align: center;
margin-top: 27px;
font-size: 24px;
color: #000;
`;

export const Line = styled.div`
  width: 90%;
  border: 1px solid #BBCDC1;
`;


export const Informations = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const InfoLeft = styled.div`
width: 100%;
color: #000;
display: flex;
flex-direction: column;
gap: 40px;
`;

export const InfoRight = styled.div`
width: 100%;
color: #000;
display: flex;
flex-direction: column;
gap: 40px;
text-align: end;
`;

export const Info = styled.div`

`;

export const InfoRealFeel = styled.div`
color: #484848;
font-size: 20px;
`;

export const InfoWindSpeed = styled.div`
color: #484848;
font-size: 20px;
`;


export const DescWindSpeed = styled.div`
color: #000;
font-size: 24px;
text-align: left;
`;
export const  DescRealFeel = styled.div`
color: #000;
font-size: 24px;
text-align: left;
`;


export const InfoHumidity = styled.div`
color: #484848;
font-size: 20px;
`;

export const DescHumidity = styled.div`
color: #000;
font-size: 24px;
text-align: right;
`;

export const InfoPrecipitation = styled.div`
color: #484848;
font-size: 20px;
`;

export const DescPrecipitation = styled.div`
color: #000;
font-size: 24px;
text-align: right;
`;
