import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body {
          font-family: 'Noto Sans KR', sans-serif;
          background-color: #1a1b1e;
        }

        a {
          text-decoration: none;
          color: #ffffff;
        }

        button {
          font-family: 'Noto Sans KR', sans-serif;
        }

        input {
          font-family: 'Noto Sans KR', sans-serif;
        }
      `}
    />
  );
}

export default GlobalStyle;
