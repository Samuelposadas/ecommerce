import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/index";

//components
import Card from "../../Components/Card/Card";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(allProducts);
  return (
    <>
      <Navbar />
      {allProducts?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      <h1>hello</h1>

      <Footer />
    </>
  );
};

export default Home;
