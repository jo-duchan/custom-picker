import { createGlobalStyle, css } from "styled-components";
import Reset from "styled-reset";

const Responsive = (value: number) => {
  /* 기준 360px에 1px, min 320px, max 425px */
  return `calc(clamp(0.888888px, 0.27777777777vw, 1.18055555552px) * ${value})`;
};

const GlobalStyle = createGlobalStyle`
${Reset};

html, body {
 width: 100%;   
 height: 100%;
};

#root {
    position: relative;
    top: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    width: ${Responsive(360)};
    height: 100%;
    overflow: hidden;
    background: #F8F8F8;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
`;

export { GlobalStyle, Responsive };
