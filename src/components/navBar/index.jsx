import React, { useState, useRef } from "react";
import styled from "styled-components";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { createTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";

const NavBar = ({ menuOpen, setMenuOpen }) => {
  const [popOver1, setPopover1] = useState({ anchorEl: null });
  const [popOver2, setPopover2] = useState({ anchorEl: null });
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const navRef = useRef(null);

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  // const handleClick = (event) => {
  //   // navRef.current =
  //   console.log(event.target.childNodes[0].textContent);
  //   setAnchorEl(event.target.childNodes[0].textContent);
  // };

  const handleClose = () => {
    // setAnchorEl(null);
    setPopover1({ anchorEl: null });
    setPopover2({ anchorEl: null });
  };

  const testMe = (e) => {
    console.log(e.target.childNodes[0]);
    console.log("navRef", navRef);
    e.target.childNodes[0].textContent === "eatures" ||
    e.target.childNodes[0].textContent === "F"
      ? setPopover1({ ...popOver1, anchorEl: e.currentTarget })
      : setPopover2({ ...popOver2, anchorEl: e.currentTarget });
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;
  return (
    <NavBarContainer>
      <NavImgWrapper>
        <img src="/images/logo.svg" alt="" />
      </NavImgWrapper>
      <NavWrapper>
        <NavMenuButton
          ref={navRef}
          aria-describedby={"pop1"}
          variant="text"
          color="secondary"
          onClick={testMe}
        >
          F<span style={{ textTransform: "lowercase" }}>eatures</span>
          {popOver1.anchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </NavMenuButton>
        <Popover
          id={"pop1"}
          open={Boolean(popOver1.anchorEl)}
          anchorEl={popOver1.anchorEl}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 290, left: 97 }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <TypographyContainer sx={{ p: 2 }}>
            <IconContainer>
              <IconImage src="/images/icon-todo.svg" />
            </IconContainer>
            Todo List
          </TypographyContainer>
          <TypographyContainer sx={{ p: 2 }}>
            <IconContainer>
              <IconImage src="/images/icon-calendar.svg" />
            </IconContainer>
            Calendar
          </TypographyContainer>
          <TypographyContainer sx={{ p: 2 }}>
            <IconContainer>
              <IconImage src="/images/icon-reminders.svg" />
            </IconContainer>
            Reminders
          </TypographyContainer>
          <TypographyContainer sx={{ p: 2 }}>
            <IconContainer>
              <IconImage src="/images/icon-planning.svg" />
            </IconContainer>
            Planning
          </TypographyContainer>
        </Popover>
        <NavMenu
          aria-describedby={"pop2"}
          variant="text"
          color="secondary"
          onClick={testMe}
        >
          C<span style={{ textTransform: "lowercase" }}>ompany</span>
          {popOver2.anchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </NavMenu>
        <Popover
          id={"pop2"}
          open={Boolean(popOver2.anchorEl)}
          anchorEl={popOver2.anchorEl}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 65, left: 310 }}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <TypographyContainer sx={{ p: 2 }}>History</TypographyContainer>
          <TypographyContainer sx={{ p: 2 }}>Our Team</TypographyContainer>
          <TypographyContainer sx={{ p: 2 }}>Blog</TypographyContainer>
        </Popover>
        <Button variant="text" color="secondary">
          C<span style={{ textTransform: "lowercase" }}>areers</span>
        </Button>
        <Button variant="text" color="secondary">
          A<span style={{ textTransform: "lowercase" }}>bout</span>
        </Button>
      </NavWrapper>
      <LoginWrapper>
        {/* //material ui iconsNavBarContainer */}

        <NavButtonWrapper>
          <LoginButton variant="text" color="secondary">
            L<span style={{ textTransform: "lowercase" }}>ogin</span>
          </LoginButton>
          <RegisterButton
            variant="text"
            color="secondary"
            sx={{ border: "solid 1px" }}
          >
            R<span style={{ textTransform: "lowercase" }}>egister</span>
          </RegisterButton>
        </NavButtonWrapper>
      </LoginWrapper>
      <NavMobileWrapper>
        {menuOpen ? (
          // <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
          // <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
          // <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
          <NavMobileMenuOpen>
            <NavMobileCloseWrapper>
              <NavMobileClose
                onClick={() => handleMenu()}
                src="/images/icon-close-menu.svg"
              />
            </NavMobileCloseWrapper>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Features
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CardHeaderContainer
                  avatar={
                    <AvatarContainer aria-label="recipe">
                      <img
                        style={{ width: "24px", height: "auto" }}
                        src="/images/icon-todo.svg"
                        alt="todo list"
                      />
                    </AvatarContainer>
                  }
                  title="Todo List"
                />
                <CardHeaderContainer
                  avatar={
                    <AvatarContainer aria-label="recipe">
                      <img
                        style={{ width: "24px", height: "auto" }}
                        src="/images/icon-calendar.svg"
                        alt="calendar"
                      />
                    </AvatarContainer>
                  }
                  title="Calendar"
                />
                <CardHeaderContainer
                  avatar={
                    <AvatarContainer aria-label="recipe">
                      <img
                        style={{ width: "24px", height: "auto" }}
                        src="/images/icon-reminders.svg"
                        alt="reminders"
                      />
                    </AvatarContainer>
                  }
                  title="Reminders"
                />
                <CardHeaderContainer
                  avatar={
                    <AvatarContainer aria-label="recipe">
                      <img
                        style={{ width: "24px", height: "auto" }}
                        src="/images/icon-planning.svg"
                        alt="planning"
                      />
                    </AvatarContainer>
                  }
                  title="Planning"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Company
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CardHeaderContainer title="History" />
                <CardHeaderContainer title="Our Team" />
                <CardHeaderContainer title="Blog" />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Careers
                </Typography>
              </AccordionSummary>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  About
                </Typography>
              </AccordionSummary>
            </Accordion>
          </NavMobileMenuOpen>
        ) : (
          <NavMobileMenu
            onClick={() => handleMenu()}
            src="/images/icon-menu.svg"
          />
        )}
      </NavMobileWrapper>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  padding-top: 20px;
  margin-bottom: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  @media screen and (max-width: 450px) {
    justify-content: space-between;
    margin-right: 30px;
  }
`;

const NavImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  margin: 9px 0 0 0;
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* flex: 1; */
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const NavButtonWrapper = styled.section`
  margin-right: 30px;
`;

const LoginButton = styled(Button)`
  border-radius: 10px !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  margin-right: 10px !important;
  &:hover {
    color: black !important;
    background-color: transparent !important;
  }
`;

const RegisterButton = styled(Button)`
  border-radius: 10px !important;
  padding-left: 20px !important;
  padding-right: 20px !important;

  &:hover {
    border: 1px black solid !important;
    color: black !important;
    background-color: transparent !important;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;

const TypographyContainer = styled(Typography)`
  display: flex;
  /* justify-content: space-between !important; */
  align-items: center;
  color: #838783 !important;
`;

const NavMenuButton = styled(Button)`
  &:hover {
    background-color: transparent !important;
  }
`;

const NavMenu = styled(Button)`
  &:hover {
    background-color: transparent !important;
  }
`;

const NavMobileWrapper = styled.div``;

const NavMobileMenu = styled.img`
  display: none;

  @media screen and (max-width: 450px) {
    display: block;
    width: 20px;
    height: 20px;
  }
`;
const NavMobileClose = styled.img`
  display: none;
  @media screen and (max-width: 450px) {
    display: block;
    width: 25px;
    height: auto;
    padding-right: 27px;
  }
`;

const NavMobileMenuOpen = styled.div`
  padding-top: 23px;
  position: absolute;
  top: 0px;
  height: 100vh;
  right: -30px;
  left: 130px;
  z-index: 1;
  background-color: white;
`;

const NavMobileCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CardHeaderContainer = styled(CardHeader)`
  text-align: start !important;
  padding: 0 !important;
`;

const AvatarContainer = styled(Avatar)`
  background-color: transparent !important;
`;
