import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button {
    font-family: 'Raleway', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  @media (min-width: 300px) {
    body {
      font-size: 2.75vw;
    }
  }

  @media (min-width: 600px) {
    body {
      font-size: 1.95vw;
    }
  }

  @media (min-width: 900px) {
    body {
      font-size: 1.5vw;
    }
  }

  @media (min-width: 1200px) {
    body {
      font-size: 1.25vw;
    }
  }

  @media (min-width: 1500px) {
    body {
      font-size: 1vw;
    }
  }
`;
