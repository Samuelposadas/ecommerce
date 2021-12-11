import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #1b1a1af4;
  background-color: #b5b4b832;
  font-size: 20px;
  margin-top: 0px;
`;

const SubWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(210px, 1100px);

  align-content: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));

  justify-items: center;
  align-items: center;
`;

const Card = styled.ul`
  display: grid;
  grid-template-columns: 210px;
  margin-left: 60px;
  margin-bottom: 50px;

  justify-items: start;
`;
const CardTitle = styled.h1`
  font-size: 21px;
`;
const CardLink = styled.li`
  font-size: 14px;
  list-style-type: none;
  cursor: pointer;
  padding: 5px;
  transition: all 0.5s ease;
  :hover {
    padding-left: 15px;
    color: #1a1818ab;
  }
`;

const Footer: FC = () => {
  return (
    <Container>
      <SubWrapper>
        <Wrapper>
          <Card>
            <CardTitle>About Us</CardTitle>
            <CardLink>Story</CardLink>
            <CardLink>Clients</CardLink>
            <CardLink>Testimonials</CardLink>
            <CardLink>Our Team</CardLink>
          </Card>
          <Card>
            <CardTitle>Services</CardTitle>
            <CardLink>Marketing</CardLink>
            <CardLink>Consulting</CardLink>
            <CardLink>Development</CardLink>
            <CardLink>Design</CardLink>
          </Card>
          <Card>
            <CardTitle>Contact Us</CardTitle>
            <CardLink>United States</CardLink>
            <CardLink>United Kingdom</CardLink>
            <CardLink>Australia</CardLink>
            <CardLink>Support</CardLink>
          </Card>
          <Card>
            <CardTitle>Social</CardTitle>
            <CardLink>Facebook</CardLink>
            <CardLink>Instagram</CardLink>
            <CardLink>Youtube</CardLink>
            <CardLink>Twitter</CardLink>
          </Card>
        </Wrapper>
      </SubWrapper>
    </Container>
  );
};

export default Footer;
