import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: auto;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'Poppins' sans-serif;
`;

export const Status = styled.span`
font-size: 24px;
margin-bottom: 4px;

@media (max-width: 400px) {
  font-size: 20px;
}
`;
export const City = styled.span`
font-size: 48px;

@media (max-width: 400px) {
  font-size: 40px;
}
`;
export const UFCountry = styled.span`
font-size: 36px;

@media (max-width: 400px) {
  font-size: 30px;
}
`;
export const Temperature = styled.span`
font-size: 96px;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

@media (max-width: 400px) {
  font-size: 86px;
}
`;