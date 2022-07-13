import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;900&display=swap');

* {
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html, body {
    height: 100%;
    width: 100%;
    background: #444444;
    color: #fff;
    /* background-image:url("./images/image.svg");
background-repeat: no-repeat;
background-size: cover;
background-position: 0 180px; */
}

`;
