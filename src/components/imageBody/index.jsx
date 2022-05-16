import React from "react";
import styled from "styled-components";

const ImageBody = () => {
  return (
    <ImageWrapper>
      <ImageGuy src="images/image-hero-desktop.png" alt="" />
    </ImageWrapper>
  );
};

export default ImageBody;

const ImageWrapper = styled.div`
  max-width: 50%;
  width: 50%;
  height: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageGuy = styled.img`
  /* max-width: 50%;
  width: 50%;
  height: auto; */
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
