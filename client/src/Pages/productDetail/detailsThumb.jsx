import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 25px;
`;
const Image = styled.img`
  width: 65px;
  height: 65px;
  object-fit: contain;
`;

const DetailsThumb = (images) => {
  return (
    <Container>
      {images.map((img, index) => (
        <Image src={img} alt="" key={index} />
      ))}
    </Container>
  );
};

export default DetailsThumb;
