import styled from 'styled-components';

interface PropsTime{
  isDay?:boolean;
}

export const Container = styled.div<PropsTime>`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-image:url("./images/image.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.isDay ? "#769CFF" : "#181818"};
  background-position: 0 180px;
`;

export const StatusSunMoon = styled.div<PropsTime>`
position: absolute;
top: 90px;
left: 100px;
width: 113px;
height: 113px;
border-radius: 50%;
background: ${(props) => props.isDay ? "#FFE178" : "#FFFFFF"};
box-shadow: ${(props) => props.isDay ? "0px 2px 22px 7px rgba(255, 225, 120, 0.25)" : "0px 2px 22px 7px rgba(255, 255, 255, 0.25), inset 5px 6px 4px rgba(0, 0, 0, 0.25)"};

@media (max-width: 900px) {
  left: calc(100vw / 1.2);
}

@media (max-width: 670px) {
  display: none;
}
`;
//