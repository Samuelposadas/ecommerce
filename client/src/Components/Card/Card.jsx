/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
import {
  Container,
  Image,
  Title,
  Price,
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
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Title onClick={() => navigate(`/products/${id}`)}>{name}</Title>
        <Image
          onClick={() => navigate(`/products/${id}`)}
          src={img[0]}
          alt="image not found"
        />

        <Wrapper>
          <Price onClick={() => navigate(`/products/${id}`)}>
            {salePrice} USD
          </Price>
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
