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
import { TextsmsRounded } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

const NavBar = () => {
  const [popOver1, setPopover1] = useState({ anchorEl: null });
  const [popOver2, setPopover2] = useState({ anchorEl: null });
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
    e.target.childNodes[0].textContent === "Features"
      ? setPopover1({ ...popOver1, anchorEl: e.currentTarget })
      : setPopover2({ ...popOver2, anchorEl: e.currentTarget });
  };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;
  return (
    <NavBarContainer>
      <NavImgWrapper>
        <img src="/images/logo.svg" alt="" />
      </NavImgWrapper>
      <NavWrapper>
        <Button
          aria-describedby={"pop1"}
          variant="text"
          color="secondary"
          onClick={testMe}
        >
          Features
          {popOver1.anchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
        <Popover
          id={"pop1"}
          open={Boolean(popOver1.anchorEl)}
          anchorEl={popOver1.anchorEl}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 272, left: 163 }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>Todo List</Typography>
          <Typography sx={{ p: 2 }}>Calender</Typography>
          <Typography sx={{ p: 2 }}>Reminders</Typography>
          <Typography sx={{ p: 2 }}>Planning</Typography>
        </Popover>
        <Button
          aria-describedby={"pop2"}
          variant="text"
          color="secondary"
          onClick={testMe}
        >
          Company
          {popOver2.anchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
        <Popover
          id={"pop2"}
          open={Boolean(popOver2.anchorEl)}
          anchorEl={popOver2.anchorEl}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 325, left: 658 }}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography sx={{ p: 2 }}>History</Typography>
          <Typography sx={{ p: 2 }}>Our Team</Typography>
          <Typography sx={{ p: 2 }}>Blog</Typography>
        </Popover>
        <Button variant="text" color="secondary">
          Careers
        </Button>
        <Button variant="text" color="secondary">
          About
        </Button>
      </NavWrapper>
      <LoginWrapper>
        {/* //material ui iconsNavBarContainer */}

        <NavButtonWrapper>
          <Button variant="text" color="secondary">
            Login
          </Button>
          <Button variant="text" color="secondary" sx={{ border: "solid 1px" }}>
            Register
          </Button>
        </NavButtonWrapper>
      </LoginWrapper>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const NavButtonWrapper = styled.section`
  margin-right: 30px;
`;
