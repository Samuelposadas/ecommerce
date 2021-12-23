import React from "react";
import {
  Container,
  SubWrapper,
  Wrapper,
  Card,
  CardTitle,
  CardLink,
} from "./styled";

const Footer = () => {
  return (
    <Container>
      <SubWrapper>
        <Wrapper>
          <Card>
            <CardTitle>ABOUT US</CardTitle>
            <CardLink>Story</CardLink>
            <CardLink>Clients</CardLink>
            <CardLink>Testimonial</CardLink>
            <CardLink>Our Team</CardLink>
          </Card>
          <Card>
            <CardTitle>SERVICES</CardTitle>
            <CardLink>Marketing</CardLink>
            <CardLink>Consulting</CardLink>
            <CardLink>Development</CardLink>
            <CardLink>Design</CardLink>
          </Card>
          <Card>
            <CardTitle>CONTACT US</CardTitle>
            <CardLink>United States</CardLink>
            <CardLink>United Kingdom</CardLink>
            <CardLink>Australia</CardLink>
            <CardLink>Support</CardLink>
          </Card>
          <Card>
            <CardTitle>SOCIAL</CardTitle>
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
