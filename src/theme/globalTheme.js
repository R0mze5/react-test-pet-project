import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    color: inherit;
    font-family: Roboto;
  }

  html {
    font-size: 16px;
  }

  body{
    font-weight: normal;
    min-width: 320px;
    color: #181B31;
    margin: 0;
    position: relative;
  }

  body.no_scroll {
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
    line-height: 1.33;
    padding: 0;
  }


  ul,
  nav {
    list-style: none;
    padding-left: 0px;
  }

  a,
  span,
  p,
  div,
  ul,
  li {
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    font-weight: inherit;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }


  details,
  summary {
    display: block;

  }

  summary {
    cursor: pointer;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  img {
    display: block;
    object-fit: contain;
    max-width: 100%;
  }

  input:focus {
    outline: none;
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    background-color: rgb(255, 255, 255);
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  menu {
    margin: 0;
    padding: 0;
  }
`;
