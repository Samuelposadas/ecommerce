import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Fade";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import apple1 from "./img/apple1.png";
import apple2 from "./img/apple2.png";
import apple3 from "./img/apple3.png";
import { ButtonDetail } from "../../common/button/button";

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
  height: 500px;
  margin-left: 35px;
  margin-right: 35px;
  background-color: #5c5af01d;

  h1 {
    display: flex;
    align-self: center;
    justify-self: center;
    flex-wrap: wrap;
    font-size: 35px;
    margin-top: 30px;
  }

  button {
    align-self: center;
    justify-self: center;
    width: 30px;
    margin-top: 30px;
  }

  img {
    display: flex;
    align-self: flex-end;
    object-fit: contain;
    height: 300px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    h1 {
      font-size: 25px;
      margin-left: 20px;
    }
    img {
      height: 200px;
    }
  }
`;

const LargeSection2 = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  width: auto;
  height: 500px;
  margin-left: 35px;
  margin-right: 35px;
  background-color: #5c5af01d;

  img {
    display: flex;
    align-self: flex-end;
    object-fit: contain;
    height: 500px;
    margin-bottom: 50px;
  }

  div {
    display: flex;
    align-self: center;
    justify-self: center;
    flex-direction: column;
    margin-bottom: 100px;

    h1 {
      display: flex;
      align-self: center;
      justify-self: center;
      width: 420px;
      font-size: 35px;
      margin-top: 30px;
    }

    p {
      align-self: center;
      justify-self: center;
      width: 420px;
      margin-top: 30px;
    }
    button {
      align-self: center;
      justify-self: center;
      width: 20%;
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    margin-left: 20px;
    margin-right: 20px;

    img {
      height: 250px;
      margin-bottom: 0px;
    }

    div {
      margin-left: 10px;
      h1 {
        width: 80%;
      }
      p {
        width: 80%;
      }
    }
  }
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
  height: 500px;
  background-color: #5c5af01d;

  img {
    height: 800px;
  }
`;

const Landing = () => {
  return (
    <>
      <Fade bottom fraction={0.3}>
        <Navbar />
      </Fade>
      <Container>
        <Fade bottom fraction={0.3}>
          <LargeSection>
            <h1>Get the gifts you have always wanted.</h1>
            <ButtonDetail>Shop</ButtonDetail>
            <img src={apple1} />
          </LargeSection>
        </Fade>
        <Fade bottom fraction={0.3}>
          <LargeSection2>
            <img src={apple2} />
            <div>
              <h1>Save 5% on iPhone with a new Store Card.</h1>
              <p>
                Shop in stores or online now through January 31. Only at the
                Store. Exclusions and terms apply.
              </p>
              <ButtonDetail>Buy</ButtonDetail>
            </div>
          </LargeSection2>
        </Fade>
        <Wrapper>
          <Fade left fraction={0.3}>
            <MediumSection>
              <img src={apple3} />
            </MediumSection>
          </Fade>
          <Fade right fraction={0.3}>
            <MediumSection />
          </Fade>
        </Wrapper>
        <Wrapper>
          <Rotate bottom left fraction={0.3}>
            <MediumSection />
          </Rotate>
          <Rotate bottom right fraction={0.3}>
            <MediumSection />
          </Rotate>
        </Wrapper>
      </Container>
      <Fade bottom fraction={0.3}>
        <Footer />
      </Fade>
    </>
  );
};

export default Landing;
