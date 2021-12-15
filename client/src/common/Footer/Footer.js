import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #e9e0e0ee;
  background-color: #2b2929;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const SubWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(210px, 1100px);

  align-content: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(215px, auto));
`;

const Card = styled.ul`
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin: 20px;
  width: 130px;
`;
const CardTitle = styled.h1`
  font-size: 21px;
  margin-bottom: 10px;
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

const Footer = () => {
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
