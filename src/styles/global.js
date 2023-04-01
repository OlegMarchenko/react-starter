import styled, { createGlobalStyle } from 'styled-components';

import MulishRegularWoff2 from './../fonts/Mulish-Regular.woff2';
import MulishRegularWoff from './../fonts/Mulish-Regular.woff';

import MulishItalicWoff2 from './../fonts/Mulish-Italic.woff2';
import MulishItalicWoff from './../fonts/Mulish-Italic.woff';

import MulishLightWoff2 from './../fonts/Mulish-Light.woff2';
import MulishLightWoff from './../fonts/Mulish-Light.woff';

import MulishSemiBoldWoff2 from './../fonts/Mulish-SemiBold.woff2';
import MulishSemiBoldWoff from './../fonts/Mulish-SemiBold.woff';

import MulishBoldWoff2 from './../fonts/Mulish-Bold.woff2';
import MulishBoldWoff from './../fonts/Mulish-Bold.woff';
import { color } from './variables';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Mulish';
    src: local('Mulish'), local('Mulish'),
    url(${MulishRegularWoff2}) format('woff2'),
    url(${MulishRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MulishItalic';
    src: local('Mulish-Italic'), local('Mulish-Italic'),
    url(${MulishItalicWoff2}) format('woff2'),
    url(${MulishItalicWoff}) format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'MulishLight';
    src: local('Mulish-Light'), local('Mulish-Light'),
    url(${MulishLightWoff2}) format('woff2'),
    url(${MulishLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'MulishSemiBold';
    src: local('Mulish-SemiBold'), local('Mulish-SemiBold'),
    url(${MulishSemiBoldWoff2}) format('woff2'),
    url(${MulishSemiBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'MulishBold';
    src: local('Mulish-Bold'), local('Mulish-Bold'),
    url(${MulishBoldWoff2}) format('woff2'),
    url(${MulishBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font: 16px/1.3 'Mulish', Arial Sans-Serif;
  }

  body {
    margin: 0;
    color: ${color.primaryColor};
    background: #111;
    &.blocked {
      overflow: hidden;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:focus {
      outline: none;
    }
  }

  input {
    width: 100%;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    margin: 0;
  }

  button {
    outline: none;
    cursor: pointer;
    background: none;
    border: none;
    color: red;
    font-size: 30px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const Application = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  padding: 15px;
  margin: 0 auto;
  min-height: 100vh;
  @media (min-width: 1280px) {
    padding: 30px;
  }
`;

export {
  GlobalStyle,
  Application,
}