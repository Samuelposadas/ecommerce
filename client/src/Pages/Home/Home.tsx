import React, { FC } from "react";
import { productsMock } from "../../mock/productsMock";

//components
import Card from "../../Components/Card/Card";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";

const Home: FC = () => {
  return (
    <>
      <Navbar />
      {productsMock?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      <Footer />
    </>
  );
};

export default Home;
