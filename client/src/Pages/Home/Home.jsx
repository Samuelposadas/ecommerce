import React from "react";
import { useSelector } from "react-redux";
import { CardsContainer, ContainerDisplay } from "./homeStyled";

//components
import Card from "../../Components/Card/Card";
import Navbar from "../../common/Navbar/Navbar.jsx";
import Footer from "../../common/Footer/Footer";
import { Paginate } from "../../Components/Pagination/Paginate";
import { SideBarFilters } from "../../common/Sidebar/Sidebar";

// import Login from "../Login/Login";

const Home = () => {
  const allProducts = useSelector((state) => state.products.allProducts);

  return (
    <>
      <Navbar />
      <ContainerDisplay>
        <SideBarFilters />
        <CardsContainer>
          {allProducts?.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </CardsContainer>
      </ContainerDisplay>

      <Paginate />

      <Footer />
    </>
  );
};

export default Home;
