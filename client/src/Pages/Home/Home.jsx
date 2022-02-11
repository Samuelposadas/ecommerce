import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsContainer, ContainerDisplay, NoProducts } from "./styled";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

//components
import Card from "../../Components/Card/Card.jsx";
import Navbar from "../../common/Navbar/Navbar.jsx";
import Footer from "../../common/Footer/Footer.jsx";
import { Paginate } from "../../Components/Pagination/pagination.jsx";
import { SideBarFilters } from "../../common/Sidebar/Sidebar.jsx";
import { getProductsNames } from "../../redux/actions/actionProducts";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsNames());
  }, []);
  const allProducts = useSelector((state) => state.products.allProducts);
  return (
    <>
      <Navbar />
      <ContainerDisplay>
        <SideBarFilters />
        <CardsContainer>
          {allProducts.length > 0 ? (
            allProducts.map((product) => <Card key={product.id} {...product} />)
          ) : (
            <NoProducts>Product not found...</NoProducts>
          )}
        </CardsContainer>
      </ContainerDisplay>

      <Paginate />
      {/* <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
      >
        {allProducts.length > 0 ? (
          allProducts.map((product) => <Card key={product.id} {...product} />)
        ) : (
          <p>Product not found...</p>
        )}
      </Carousel> */}
      <Footer />
    </>
  );
};

export default Home;
