import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Students from "../assets/students.png";
import { LightPurpleButton } from "../components/buttonStyles";

const Homepage = () => {
  return (
    <StyledContainer>
      <Grid container spacing={0} alignItems={"center"}>
        <Grid item xs={12} md={6}>
          <img src={Students} alt="students" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <StyledTitle>
              Welcome to
              <br />
              School Management
              <br />
              System
            </StyledTitle>
            <StyledText>
              Streamline school management, class organization, and add students
              and faculty. Seamlessly track attendance, assess performance, and
              provide feedback. Access records, view marks, and communicate
              effortlessly.
            </StyledText>
            <StyledBox>
              <StyledLink to="/choose">
                <LightPurpleButton variant="contained" fullWidth>
                  Login
                </LightPurpleButton>
              </StyledLink>
              <StyledLink to="/chooseasguest">
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: "#151B77",
                    borderColor: "#151B77"
                  }}
                >
                  Login as Guest
                </Button>
              </StyledLink>
            </StyledBox>
              <StyledText>
                Don't have an account?{" "}
                <Link to="/Adminregister" style={{ color: "#151B77" }}>
                  Sign up
                </Link>
              </StyledText>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: calc(100vh - 24px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
