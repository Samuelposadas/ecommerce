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
  console.log(allCategories);

  const [categoryName, setCategoryName] = useState("");

  const onChangeCategoryName = (e) => {
    setCategoryName(e.target.value);
  };

  const onSubmitCategory = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${URL_BASE}/categories`, { categoryName });
    alert(res.data.name || res.data.msg);
    dispatch(getAllCategories());
    setCategoryName("");
  };

  const onDeleteCategory = async (e) => {
    const categoryName = e.target.getAttribute("data-category-name");
    console.log(categoryName);
    try {
      const res = await axios({
        method: "delete",
        url: `${URL_BASE}/categories`,
        data: {
          categoryName,
        },
      });
      console.log(res.data);
      alert(res.data.msg);
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
          placeholder="enter category name"
          onChange={onChangeCategoryName}
        />
        <button>Create</button>
      </form>
      <ul>
        {allCategories.map((category) => {
          return (
            <li key={category.id}>
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
