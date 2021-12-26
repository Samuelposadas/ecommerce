import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Image = styled.img``;

const DetailsThumb = () => {
  const { images, tab, myRef } = this.props;

  return (
    <Container ref={myRef}>
      {images.map((img, index) => (
        <Image src={img} alt="" key={index} onClick={() => tab(index)} />
      ))}
    </Container>
  );
};

export default DetailsThumb;
