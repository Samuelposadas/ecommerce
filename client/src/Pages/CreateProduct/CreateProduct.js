import React, { useEffect, useState } from "react";

import { getAllCategories, getSuppliers, postProducts } from "../../actions";

import { useDispatch, useSelector } from "react-redux";

const validate = (input) => {
  let errors = {};
  if (input.rating < 1 || input.rating > 5)
    return "rating should be greater than 1 and less than 5";
  if (input.stock < 1) return "stock should be greater than 1";
  if (input.salePrice < 1) return "salePrice should be greater than 1";
  if (input.purchasePrice < 1) return "purchasePrice should be greater than 1";
  input.supplier
    ? (errors.supplier = "")
    : (errors.supplier = "You must provide a supplier");
  input.name ? (errors.name = "") : (errors.name = "You must provide a name");
  input.description
    ? (errors.description = "")
    : (errors.description = "You must provide a description");
  input.categories.length < 1
    ? (errors.categories = "Choose at least one img")
    : (errors.categories = "");
  if (!input.img.includes("https://" || "http://")) {
    errors.img = "This isn't a valid image address";
  } else {
    errors.img = "";
  }
  return errors;
};

const CreateProduct = () => {
  const initialState = {
    name: "",
    description: "",
    salePrice: 0,
    rating: 0,
    stock: 0,
    img: [],
    purchasePrice: 0,
    discount: 0,
    categories: [],
    supplier: 1,
  };
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.allCategories);
  const allSuppliers = useSelector((state) => state.allSuppliers);
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState(initialState);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    dispatch(getSuppliers());
  }, []);

  function handleChange(e) {
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  const handleSelectCategories = (e) => {
    setInput((input) => ({
      ...input,
      categories: [...input.categories, +e.target.value],
    }));
    setErrors(
      validate({
        ...input,
        categories: [...input.categories, e.target.value],
      })
    );
  };
  const handleSelectSupplier = (e) => {
    setInput((input) => ({
      ...input,
      supplier: +e.target.value,
    }));
    setErrors(
      validate({
        ...input,
        supplier: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProducts(input));
    setInput(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            placeholder="product name"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <input
            type="text"
            name="description"
            placeholder="product description"
            value={input.description}
            onChange={handleChange}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div>
          <input
            type="number"
            name="salePrice"
            placeholder="product salePrice"
            value={input.salePrice}
            onChange={handleChange}
          />
          {errors.salePrice && <p>{errors.salePrice}</p>}
        </div>
        <div>
          <input
            type="number"
            name="rating"
            placeholder="product rating"
            value={input.rating}
            onChange={handleChange}
          />
          {errors.rating && <p>{errors.rating}</p>}
        </div>
        <div>
          <input
            type="number"
            name="stock"
            placeholder="product stock"
            value={input.stock}
            onChange={handleChange}
          />
          {errors.stock && <p>{errors.stock}</p>}
        </div>
        <div>
          <input
            type="text"
            name="img"
            placeholder="products img"
            value={input.img}
            onChange={handleChange}
          />
          {errors.img && <p>{errors.img}</p>}
        </div>
        <div>
          <input
            type="number"
            name="discount"
            value={input.discount}
            onChange={handleChange}
            placeholder="product discount"
          />
          {errors.discount && <p>{errors.discount}</p>}
        </div>
        <div>
          <input
            type="number"
            name="purchasePrice"
            placeholder="product purchasePrice"
            value={input.purchasePrice}
            onChange={handleChange}
          />
          {errors.purchasePrice && <p>{errors.purchasePrice}</p>}
        </div>
        <div>
          <h3>categories:</h3>
          <select name="categories" onChange={handleSelectCategories}>
            {allCategories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.categories && <p>{errors.categories}</p>}
        </div>
        <div>
          <h3>suppliers:</h3>
          <select name="supplier" onChange={handleSelectSupplier}>
            {allSuppliers.map((supplier) => (
              <option value={supplier.id} key={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
