import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
`;

export const HourWrapper = styled.div`
width: 1240px;
height: 141px;
background: #E8FFEF;
border: 1px solid #D2E8D9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 70.5px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 40px;

@media (max-width: 1250px) {
    width: 880px;
    gap: 15px;
}

@media (max-width: 900px) {
    width: 100vw;
}
`;

export const DayliInfoWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 38px;
margin-top: 25px;

@media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;