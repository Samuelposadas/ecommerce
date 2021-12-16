import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
//components
import Card from "../../Components/Card/Card";
import Navbar from "../../common/Navbar/Navbar.jsx";
import Footer from "../../common/Footer/Footer";
import { Paginate } from "../../Components/Pagination/Paginate";

// import Login from "../Login/Login";

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
  const allProducts = useSelector((state) => state.allProducts);

  return (
    <>
      <Navbar />

      <CardsContainer>
        {allProducts?.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </CardsContainer>

      <Paginate />

      <Footer />
    </>
  );
};

export default Home;
