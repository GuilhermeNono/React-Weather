import styled from 'styled-components';

export const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #000;
`;


export const Hour = styled.div`
font-size: 24px;
color: #484848;

@media (max-width: 1250px) {
    font-size: 20px;
}

@media (max-width: 815px) {
    font-size: 18px;
    padding-bottom: 10px;
}
`

export const Icon = styled.div`
width: 57px;
height: 57px;
background-image: url('./images/icons_cloud.svg');
background-size: cover;

@media (max-width: 1250px) {
    width: 50px;
    height: 50px;
}

@media (max-width: 900px) {
    width: 50px;
    height: 50px;
}

@media (max-width: 815px) {
    width: 44px;
    height: 44px;
}
`

export const Temperature = styled.div`
font-size: 26px;
color: #373737;
line-height: 36px;

@media (max-width: 1250px) {
    font-size: 24px;
}

@media (max-width: 815px) {
    font-size: 16px;
    padding-top: 10px;
}
`
