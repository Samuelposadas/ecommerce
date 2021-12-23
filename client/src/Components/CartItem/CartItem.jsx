import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editQuantity, removeFromCart } from "../../redux/actions/actionCart";
import styled from "styled-components";
import { Toaster, toast } from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";

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
	color: #636060e2;
  }
  svg {
    font-size: 20px;
    grid-area: delete;
    cursor: pointer;
	color: #636060e2;
  }
  h3 {
    grid-area: price;
    font-size: 15px;
    justify-self: end;
  }


  img {
    height: 150px;
    width: 180px;
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
      <FaRegTrashAlt onClick={() => deleteItem(id)}></FaRegTrashAlt>

      <h3>${salePrice}</h3>
      <Toaster />
    </Container>
  );
};

export default CartItem;
