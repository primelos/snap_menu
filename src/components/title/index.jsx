import React from "react";
import styled from "styled-components";

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
      <button>Learn More</button>
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
  justify-content: center;
  flex-direction: column;
  max-width: 50%;
  width: 50%;
  text-align: start;
  margin-left: 300px;
  margin-right: 100px;
`;

const Header1 = styled.h1`
  font-size: 6rem;
  font-weight: bold; ;
`;

const IntroText = styled.p`
  margin: 0;
  padding-bottom: 40px;
`;

const IconWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img``;
