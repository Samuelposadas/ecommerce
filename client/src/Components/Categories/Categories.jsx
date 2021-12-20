import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL_BASE } from "../../redux/constants";
import { getAllCategories } from "../../redux/actions/actionProducts";
import { StyledCategories } from "./styledCategories";
// import { renderCategories } from "../../utils/mapsRenders";

const Categories = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.products.allCategories);

  const [categoryName, setCategoryName] = useState("");

  const onChangeCategoryName = (e) => {
    setCategoryName(e.target.value);
  };

  const onSubmitCategory = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL_BASE}/categories`, { categoryName });
      dispatch(getAllCategories());
      setCategoryName("");
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteCategory = async (e) => {
    const categoryName = e.target.getAttribute("data-category-name");
    alert(`Are you sure to delete the category ${categoryName}`);
    try {
      const res = await axios({
        method: "delete",
        url: `${URL_BASE}/categories`,
        data: {
          categoryName,
        },
      });
      dispatch(getAllCategories());
    } catch (error) {
      console.log(error);
    }
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
          placeholder="new category name..."
          onChange={onChangeCategoryName}
        />
        <button>Create</button>
      </form>
      <ul>
        {allCategories.map((category) => {
          return (
            <li key={category.id}>
              <input type="text" name="" id="" />
              <span>{category.name}</span>
              <span
                data-category-name={category.name}
                onClick={onDeleteCategory}
                className="deleteCategory"
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    </StyledCategories>
  );
};

export default Categories;
