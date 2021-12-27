/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import StarIcon from "@mui/icons-material/Star";
import {
  Container,
  Image,
  Title,
  Price,
  StyledLink,
  LogoContainer,
  Wrapper,
} from "./styled";
// import { addToCart } from "../../redux/actions/actionCart";
// import { Toaster, toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { getProductDetail } from "../../redux/actions/actionProducts";

const Card = ({ img, name, salePrice, id }) => {
  //   const { id } = useParams();

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getProductDetail(id));
  //   }, []);

  //   const addCart = () => {
  //     dispatch(addToCart(id));
  //     toast.success("Added Product");
  //   };
  return (
    <>
      <Container>
        <StyledLink to={`/products/${id}`}>
          <Title>{name}</Title>
        </StyledLink>
        <Image src={img[0]} alt="image not found" />

        <Wrapper>
          <Price>{salePrice} USD</Price>
          <LogoContainer>
            <AiOutlineShoppingCart></AiOutlineShoppingCart>
          </LogoContainer>
        </Wrapper>
        {/* <Rating>{Array(Math.round(rating)).fill(<StarIcon />, 0)}</Rating> */}
      </Container>
    </>
  );
};

export default Card;
