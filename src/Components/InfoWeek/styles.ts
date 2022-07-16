import styled from 'styled-components';

export const Container = styled.div`
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
  width: 100vw;
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

export const CardContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-content: space-between;
align-items: flex-end;
gap: 40px;

@media (max-width: 1250px) {
  gap: 20px;
}

@media (max-width: 900px) {
  gap: 80px;
}
`;
