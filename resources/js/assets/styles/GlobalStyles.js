import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fefefe;
    font-size: 1.6rem;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
