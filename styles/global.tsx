import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        @font-face {
          font-family: 'AppleSDGothicNeoB00';
          font-style: normal;
          src: url('/font/AppleSDGothicNeoB.woff') format('woff'),
            url('/font/AppleSDGothicNeoB.woff2') format('font-woff2');
        }

        @font-face {
          font-family: 'AppleSDGothicNeoM00';
          font-style: normal;
          src: url('/font/AppleSDGothicNeoM.woff') format('woff'),
            url('/font/AppleSDGothicNeoM.woff2') format('font-woff2');
        }

        @font-face {
          font-family: 'AppleSDGothicNeoEB00';
          font-style: normal;
          src: url('/font/AppleSDGothicNeoEB.woff') format('woff');
        }
        @font-face {
          font-family: 'AppleSDGothicNeoSB00';
          font-style: normal;
          src: url('../font/AppleSDGothicNeoSB.woff') format('woff');
        }

        body {
          font-family: 'AppleSDGothicNeoM00', sans-serif;
          background-color: #1a1b1e;
        }

        p {
          font-family: 'AppleSDGothicNeoM00', sans-serif !important;
        }

        a {
          text-decoration: none;
          color: #ffffff;
        }

        button {
          font-family: 'AppleSDGothicNeoM00', sans-serif;
        }

        input {
          font-family: 'AppleSDGothicNeoM00', sans-serif;
        }
      `}
    />
  );
}

export default GlobalStyle;
