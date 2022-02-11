import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Fade";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import apple1 from "./img/apple1.png";
import apple2 from "./img/apple2.png";
import apple3 from "./img/apple3.png";
import apple4 from "./img/apple4.png";
import apple5 from "./img/apple5.png";
import { ButtonDetail } from "../../common/button/button";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 50px;
  margin-top: 70px;
`;

const LargeSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: auto;
  height: 550px;
  margin-left: 35px;
  margin-right: 35px;
  padding: 10px;
  background-color: #5c5af01d;

  h1 {
    display: flex;
    align-self: center;
    justify-self: center;
    font-size: 35px;
    margin-top: 10px;
    padding: 20px;
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
    }
    img {
      height: 160px;
    }
  }
`;

const LargeSection2 = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-content: center;
  justify-content: center;
  padding: 10px;

  width: auto;
  height: 550px;
  margin-left: 35px;
  margin-right: 35px;
  background-color: #5c5af01d;

  img {
    display: flex;
    align-self: flex-end;
    object-fit: contain;
    height: 500px;
    margin-bottom: 10px;
    padding: 10px;
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
      width: 400px;
      font-size: 35px;
      margin-top: 30px;
    }

    p {
      align-self: center;
      justify-self: center;
      width: 400px;
      margin-top: 30px;
    }
    button {
      align-self: center;
      justify-self: center;
      width: 20%;
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;

    margin-left: 20px;
    margin-right: 20px;

    img {
      height: 250px;
      margin-top: 70px;
    }

    div {
      h1 {
        width: 95%;
        padding-left: 20px;
        padding-right: 20px;
      }
      p {
        width: 95%;
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 3rem;
  margin-left: 35px;
  margin-right: 35px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const SubWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const MediumSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: auto;
  height: 485px;
  background-color: #5c5af01d;
  img {
    align-self: center;
    justify-self: center;
    height: 450px;
    width: 550px;
  }
  @media screen and (max-width: 768px) {
    img {
      height: 300px;
      width: 350px;
    }
  }
`;

const MediumSection2 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: auto;
  height: 1000px;
  background-color: #5c5af01d;

  button {
    color: #0077ed;
    background-color: transparent;
    border: none;
    font-size: 15px;
    padding: 10px;
    height: 35px;
    width: auto;
    align-self: center;
    &:hover {
      cursor: pointer;
    }
  }

  img {
    align-self: center;
    justify-self: center;
    height: 650px;
    width: 350px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 768px) {
    img {
      height: 600px;
      width: 300px;
    }
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
            <MediumSection2>
              <button>{"Find your accessory >"}</button>
              <img src={apple3} />
            </MediumSection2>
          </Fade>
          <SubWrapper>
            <Fade right fraction={0.3}>
              <MediumSection>
                <img src={apple4} />
              </MediumSection>
            </Fade>
            <Rotate bottom right fraction={0.3}>
              <MediumSection>
                <img src={apple5} />
              </MediumSection>
            </Rotate>
          </SubWrapper>
        </Wrapper>
      </Container>
      <Fade bottom fraction={0.3}>
        <Footer />
      </Fade>
    </>
  );
};

export default Landing;
