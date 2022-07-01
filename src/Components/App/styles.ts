import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const StatusSunMoon = styled.div`
position: absolute;
top: 50px;
left: 100px;
width: 113px;
height: 113px;
border-radius: 50%;
background: #FFFFFF;
box-shadow: 0px 2px 22px 7px rgba(255, 255, 255, 0.25), inset 5px 6px 4px rgba(0, 0, 0, 0.25);
`;
