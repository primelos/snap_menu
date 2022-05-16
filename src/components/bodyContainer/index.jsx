import React from "react";
import ImageBody from "../imageBody";
import Title from "../title";
import styled from "styled-components";

const BodyContainer = () => {
  return (
    <BodyWrapper>
      <Title />
      <ImageBody />
    </BodyWrapper>
  );
};

export default BodyContainer;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
