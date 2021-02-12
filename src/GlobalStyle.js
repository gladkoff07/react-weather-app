import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 100vh;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    line-height: 1.3;
    background-image: linear-gradient(
      to right top,
      #99bbcb,
      #a5c7d7,
      #b1d4e2,
      #bde0ee,
      #c9edfa
    );
  }

  #root {
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    body {
      align-items: flex-start;
    }

    #root {
      height: 100%;
    }
  }
`;