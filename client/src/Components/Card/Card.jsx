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
  OldPrice,
} from "./styled";
import { addToCart } from "../../redux/actions/actionCart";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Card = ({ img, name, salePrice, id, discount }) => {
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(addToCart(id));
    toast.success("Added Product");
  };

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
          {discount ? (
            <div>
              <OldPrice onClick={() => navigate(`/products/${id}`)}>
                {salePrice} USD
              </OldPrice>
              <Price onClick={() => navigate(`/products/${id}`)}>
                {salePrice - (salePrice * discount) / 100} USD
              </Price>
            </div>
          ) : (
            <Price onClick={() => navigate(`/products/${id}`)}>
              {salePrice} USD
            </Price>
          )}
          <LogoContainer>
            <AiOutlineShoppingCart onClick={addCart}></AiOutlineShoppingCart>
          </LogoContainer>
        </Wrapper>
        {/* <Rating>{Array(Math.round(rating)).fill(<StarIcon />, 0)}</Rating> */}
      </Container>
    </>
  );
};

export default Card;
