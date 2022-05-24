import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Title = () => {
  return (
    <TitleWrapper>
      <Header1>
        Make <br /> remote work
      </Header1>
      <IntroText>
        Get your team in sync, no matter your location.
        <br />
        Streamline processess, create team rituals, and
        <br />
        watch productivity soar.
      </IntroText>
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
`;

const Header1 = styled.h1`
  font-size: 6rem;
  font-weight: bold; ;
`;

const IntroText = styled.p`
  margin: 0;
  padding-bottom: 40px;
  line-height: 1.5;
  font-size: 18px;
`;

const IconWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  width: 70%;
`;

const StyledButton = styled(Button)`
  background-color: black !important;
  color: white !important;
  font-size: 18px !important;
  border-radius: 10px !important;
  width: 151px !important;
  font-weight: 600 !important;
  padding: 10px 0 !important;
  &:hover {
    background-color: white !important;
    color: black !important;
    border: solid 1px black !important;
  }
`;

const Icon = styled.img``;
