import React from "react";
import { useSelector } from "react-redux";
import { CardsContainer, ContainerDisplay } from "./styled";

//components
import Card from "../../Components/Card/Card.jsx";
import Navbar from "../../common/Navbar/Navbar.jsx";
import Footer from "../../common/Footer/Footer.jsx";
import { Paginate } from "../../Components/Pagination/Pagination.jsx";
import { SideBarFilters } from "../../common/Sidebar/Sidebar.jsx";

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
