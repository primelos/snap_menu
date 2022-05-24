import React from "react";
import ImageBody from "../imageBody";
import Title from "../title";
import styled from "styled-components";

const BodyContainer = () => {
  return (
    <BodyWrapper>
      <Container>
        <Title />
        <ImageBody />
      </Container>
    </BodyWrapper>
  );
};

export default BodyContainer;

const BodyWrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 80%;
`;
