import React from "react";
import styled from "styled-components";
import dummyText from "dummyText";

// Style
import { GlobalStyle, Responsive } from "styles/common";

// Components
import Picker from "components/Picker";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Picker />
      <DummyText>{dummyText}</DummyText>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 ${Responsive(20)};
  box-sizing: border-box;
  overflow: hidden auto;
`;

const DummyText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2em;
  color: #303030;
`;
