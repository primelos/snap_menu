import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Title = () => {
  return (
    <TitleWrapper>
      <Header1>
        Make {window.innerWidth < 451 ? "" : <br />} remote work
      </Header1>
      {window.innerWidth < 451 ? (
        <IntroText>
          Get your team in sync, no matter your <br /> location. Streamline
          processess, create <br /> team rituals, and watch productivity soar.
        </IntroText>
      ) : (
        <IntroText>
          Get your team in sync, no matter your location.
          <br />
          Streamline processess, create team rituals, and
          <br />
          watch productivity soar.
        </IntroText>
      )}

      <StyledButton>
        L<span style={{ textTransform: "lowercase" }}>earn More</span>
      </StyledButton>
      <IconWrapper>
        <Icon src="/images/client-databiz.svg" alt="" />
        <Icon src="/images/client-audiophile.svg" alt="" />
        <Icon src="/images/client-meet.svg" alt="" />
        <Icon src="/images/client-maker.svg" alt="" />
      </IconWrapper>
    </TitleWrapper>
  );
};

export default Title;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  height: 100%;
  text-align: start;
  /* margin-left: 300px; */
  /* margin-right: 100px; */
  flex: 1;
  @media screen and (max-width: 450px) {
    align-items: center;
    text-align: center;
  }
`;

const Header1 = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  @media screen and (max-width: 450px) {
    font-size: 2.8rem;
    max-width: 95%;
    width: 100%;
  }
`;

const IntroText = styled.p`
  margin: 0;
  padding-bottom: 40px;
  line-height: 1.5;
  font-size: 18px;
  @media screen and (max-width: 450px) {
    color: #6b6d6b !important;
    font-weight: 500 !important;
  }
`;

const IconWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 100px; */
  width: 70%;
  @media screen and (max-width: 450px) {
    width: 90%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const Icon = styled.img`
  width: 70px;
`;

const StyledButton = styled(Button)`
  background-color: black !important;
  color: white !important;
  font-size: 18px !important;
  border-radius: 12px !important;
  width: 151px !important;
  font-weight: 600 !important;
  padding: 10px 0 !important;
  &:hover {
    background-color: white !important;
    color: black !important;
    border: solid 1px black !important;
  }
`;
