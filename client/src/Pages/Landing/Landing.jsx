import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Fade";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 50px;
  margin-top: 80px;
`;

const LargeSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: auto;
  height: 600px;
  margin-left: 35px;
  margin-right: 35px;
  background-color: #5c5af01d;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-left: 35px;
  margin-right: 35px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const MediumSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: auto;
  height: 600px;
  background-color: #5c5af01d;
`;

const Landing = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Fade bottom fraction={0.4}>
          <LargeSection />
        </Fade>
        <Fade bottom fraction={0.4}>
          <LargeSection />
        </Fade>
        <Wrapper>
          <Fade left fraction={0.4}>
            <MediumSection />
          </Fade>
          <Fade right fraction={0.4}>
            <MediumSection />
          </Fade>
        </Wrapper>
        <Wrapper>
          <Rotate bottom left fraction={0.4}>
            <MediumSection />
          </Rotate>
          <Rotate bottom right fraction={0.4}>
            <MediumSection />
          </Rotate>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
