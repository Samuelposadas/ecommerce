import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/index";
import styled from "styled-components";
//components
import Card from "../../Components/Card/Card";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";

const CardsContainer = styled.div`
  display: grid;
  background-color: #b5b4b832;
  margin-top: 45px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 440px));
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
`;

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <Navbar />
      <CardsContainer>
        {allProducts?.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </CardsContainer>

      <Footer />
    </>
  );
};

export default Home;
