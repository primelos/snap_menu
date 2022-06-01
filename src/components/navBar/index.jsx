import React, { useState, useRef, useEffect } from "react";
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
  const navRef = useRef();

  const handleClose = () => {
    // setAnchorEl(null);
    setPopover1({ anchorEl: null });
    setPopover2({ anchorEl: null });
  };

  const testMe = (e) => {
    e.target.childNodes[0].textContent === "eatures" ||
    e.target.childNodes[0].textContent === "F"
      ? setPopover1({ ...popOver1, anchorEl: e.currentTarget })
      : setPopover2({ ...popOver2, anchorEl: e.currentTarget });
  };

  useEffect(() => {
    let test = navRef.current;
    console.log(test);
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    handleClickOutside(navRef);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setMenuOpen, navRef]);

  const handleMenu = (e) => {
    console.log("e", e);
    // useRef(e.currentTarget).childNodes[0].textContent === "Features"
    // navRef.current = e.target.

    setMenuOpen(!menuOpen);
  };

  console.log("window", window);
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
        <NavMenu
          aria-describedby={"pop1"}
          variant="text"
          color="secondary"
          onClick={testMe}
        >
          F<span style={{ textTransform: "lowercase" }}>eatures</span>
          {popOver1.anchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </NavMenu>
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
        <Button variant="text" color="secondary" sx={{ fontWeight: "600" }}>
          C<span style={{ textTransform: "lowercase" }}>areers</span>
        </Button>
        <Button variant="text" color="secondary" sx={{ fontWeight: "600" }}>
          A<span style={{ textTransform: "lowercase" }}>bout</span>
        </Button>
      </NavWrapper>
      <LoginWrapper>
        {/* //material ui iconsNavBarContainer */}

        <NavButtonWrapper>
          <LoginButton
            variant="text"
            color="secondary"
            sx={{ fontWeight: "600" }}
          >
            L<span style={{ textTransform: "lowercase" }}>ogin</span>
          </LoginButton>
          <RegisterButton
            variant="text"
            color="secondary"
            sx={{ border: "solid 2px", fontWeight: "600" }}
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
          <NavMobileMenuOpen ref={navRef}>
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
            <Accordion>
              <AccordionSummary
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Careers
                </Typography>
              </AccordionSummary>
            </Accordion>
            <Accordion>
              <AccordionSummary
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  About
                </Typography>
              </AccordionSummary>
            </Accordion>

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
          </NavMobileMenuOpen>
        ) : (
          <NavMobileMenu
            onClick={(e) => handleMenu(e)}
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
    margin-bottom: 80px;
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
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
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
  @media screen and (max-width: 450px) {
    color: #6b6d6b !important;
    font-weight: 600 !important;
  }
`;

const RegisterButton = styled(Button)`
  border-radius: 12px !important;
  padding-left: 20px !important;
  padding-right: 20px !important;

  &:hover {
    border: 1px black solid !important;
    color: black !important;
    background-color: transparent !important;
  }
  @media screen and (max-width: 450px) {
    width: 80%;
    color: #6b6d6b !important;
    border: 2px solid #6b6d6b !important;
    font-weight: 600 !important;
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
  color: #6b6d6b !important;
`;

const NavMenuButton = styled(Button)`
  &:hover {
    background-color: transparent !important;
  }
`;

const NavMenu = styled(Button)`
  font-weight: 600 !important;

  &:hover {
    background-color: transparent !important;
  }
`;

const NavMobileWrapper = styled.div``;

const NavMobileMenu = styled.img`
  display: none;
  width: 25px;
  height: auto;

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
  /* transform: ${(props) =>
    props.menuOpen ? "translateX(0)" : "translateX(10%)"};
  transition: transform 0.2s; */
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
