import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageBody = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);

  return (
    <ImageWrapper>
      {windowWidth <= 450 ? (
        <ImageGuy src="images/image-hero-mobile.png" alt="" />
      ) : (
        <ImageGuy src="images/image-hero-desktop.png" alt="" />
      )}
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
  /* margin-right: 269px; */
  @media screen and (max-width: 450px) {
    /* padding-top: 0px; */
    max-width: 100%;
    width: 100%;
  }
`;

const ImageGuy = styled.img`
  /* max-width: 50%;
  width: 50%;
  height: auto; */
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
