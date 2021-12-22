import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editQuantity, removeFromCart } from "../../redux/actions/actionCart";
import styled from "styled-components";
import { Toaster, toast } from "react-hot-toast";

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "image name name price"
    "image quantity quantity price"
    "image delete delete price";
  p {
    font-size: 15px;
    grid-area: name;
  }
  input {
    height: 20px;
    width: 50px;
    grid-area: quantity;
  }
  button {
    height: 30px;
    width: 30px;
    grid-area: delete;
  }
  h3 {
    grid-area: price;
    font-size: 15px;
    justify-self: end;
  }

  img {
    height: 170px;
    width: 200px;
    object-fit: contain;
    grid-area: image;
  }
`;

const CartItem = ({ img, name, salePrice, id, quantity }) => {
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Product Remove");
  };
  const [input, setInput] = useState(quantity);
  const handleChange = (e) => {
    setInput(e.target.value);
    dispatch(editQuantity(e.target.value, id));
  };
  return (
    <Container>
      <img src={img}></img>
      <p>{name}</p>
      <input value={input} min="1" type="number" onChange={handleChange} />
      <button onClick={() => deleteItem(id)}></button>

      <h3>{salePrice}</h3>
      <Toaster />
    </Container>
  );
};

export default CartItem;
