import React from "react";
import styled from "styled-components";

// Components
import PickerCore from "components/PickerCore";

function Picker() {
  return (
    <Container>
      <OutSide />
      <PickerCore />
    </Container>
  );
}

export default Picker;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const OutSide = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
`;
