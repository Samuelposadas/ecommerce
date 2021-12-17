import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL_BASE } from "../../redux/constants";
import { getAllCategories } from "../../redux/actions/actionProducts";
import { StyledCategories } from "./styledCategories";
import { renderCategories } from "../../utils/mapsRenders";

const Categories = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.products.allCategories);
  console.log(allCategories);

  const [category, setCategory] = useState("");

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const onSubmitCategory = async (e) => {
    e.preventDefault();
    await axios.post(`${URL_BASE}`);
  };

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <StyledCategories>
      <form action="" onSubmit={onSubmitCategory}>
        <input
          type="text"
          name="name"
          value={category}
          id=""
          placeholder="enter category name"
          onChange={onChangeCategory}
        />
        <button type="button">Create</button>
      </form>
      {renderCategories(allCategories)}
    </StyledCategories>
  );
};

export default Categories;
