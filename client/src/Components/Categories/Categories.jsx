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

  const [categoryName, setCategoryName] = useState("");

  const onChangeCategory = (e) => {
    setCategoryName(e.target.value);
  };

  const onSubmitCategory = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${URL_BASE}/categories`, { categoryName });
    alert(res.data.name || res.data.msg);
    dispatch(getAllCategories());
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
          value={categoryName}
          id=""
          placeholder="enter category name"
          onChange={onChangeCategory}
        />
        <button>Create</button>
      </form>
      {renderCategories(allCategories)}
    </StyledCategories>
  );
};

export default Categories;
