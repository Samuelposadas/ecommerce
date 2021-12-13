import React, { useEffect, useState } from "react";

import {
  getAllCategories,
  getSuppliers,
  postProducts,
} from "../../actions/index";

import { useDispatch, useSelector } from "react-redux";
import { Container, Content, Select, StyledButton, StyledForm } from "./styles";

const validate = (input) => {
  let errors = {};
  if (input.rating < 1 || input.rating > 5) {
    errors.rating = "rating should be greater than 1 and less than 5";
  }
  if (input.stock < 1) {
    errors.stock = "stock should be greater than 1";
  }

  if (input.salePrice < 1) {
    errors.salePrice = "salePrice should be greater than 1";
  }
  if (input.purchasePrice < 1) {
    errors.purchasePrice = "purchasePrice should be greater than 1";
  }
  input.supplier
    ? (errors.supplier = "")
    : (errors.supplier = "You must provide a supplier");
  input.name ? (errors.name = "") : (errors.name = "You must provide a name");
  input.description
    ? (errors.description = "")
    : (errors.description = "You must provide a description");
  input.categories.length === 0
    ? (errors.categories = "Choose at least one category")
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
    console.log("hola");
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
    if (
      e.target.value !== "null" &&
      !input.categories.includes(+e.target.value)
    ) {
      setInput((input) => ({
        ...input,
        categories: [...input.categories, +e.target.value],
      }));
    }
    setErrors(
      validate({
        ...input,
        categories: [...input.categories, e.target.value],
      })
    );
  };
  const handleSelectSupplier = (e) => {
    if (e.target.value !== "null") {
      setInput((input) => ({
        ...input,
        supplier: +e.target.value,
      }));
    }
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
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Content>
          <input
            className={errors.name && "danger"}
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            placeholder="product name"
          />
          {errors.name && <p className="danger">{errors.name}</p>}
        </Content>
        <Content>
          <input
            className={errors.description && "danger"}
            type="text"
            name="description"
            placeholder="product description"
            value={input.description}
            onChange={handleChange}
          />
          {errors.description && <p className="danger">{errors.description}</p>}
        </Content>
        <Content>
          <input
            className={errors.salePrice && "danger"}
            type="number"
            name="salePrice"
            placeholder="product salePrice"
            value={input.salePrice}
            onChange={handleChange}
          />
          {errors.salePrice && <p className="danger">{errors.salePrice}</p>}
        </Content>
        <Content>
          <input
            className={errors.rating && "danger"}
            type="number"
            name="rating"
            placeholder="product rating"
            value={input.rating}
            onChange={handleChange}
          />
          {errors.rating && <p className="danger">{errors.rating}</p>}
        </Content>
        <Content>
          <input
            className={errors.stock && "danger"}
            type="number"
            name="stock"
            placeholder="product stock"
            value={input.stock}
            onChange={handleChange}
          />
          {errors.stock && <p className="danger">{errors.stock}</p>}
        </Content>
        <Content>
          <input
            className={errors.img && "danger"}
            type="text"
            name="img"
            placeholder="products img"
            value={input.img}
            onChange={handleChange}
          />
          {errors.img && <p className="danger">{errors.img}</p>}
        </Content>
        <Content>
          <input
            className={errors.discount && "danger"}
            type="number"
            name="discount"
            value={input.discount}
            onChange={handleChange}
            placeholder="product discount"
          />
          {errors.discount && <p className="danger">{errors.discount}</p>}
        </Content>
        <Content>
          <input
            className={errors.purchasePrice && "danger"}
            type="number"
            name="purchasePrice"
            placeholder="product purchasePrice"
            value={input.purchasePrice}
            onChange={handleChange}
          />
          {errors.purchasePrice && (
            <p className="danger">{errors.purchasePrice}</p>
          )}
        </Content>
        <Select>
          <h3>Categories:</h3>
          <select name="categories" onChange={handleSelectCategories}>
            <option value="null">Category</option>
            {allCategories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.categories && <p className="danger">{errors.categories}</p>}
        </Select>
        <Select>
          <h3>Suppliers:</h3>
          <select name="supplier" onChange={handleSelectSupplier}>
            <option value="null">Supplier</option>
            {allSuppliers.map((supplier) => (
              <option value={supplier.id} key={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
        </Select>

        <StyledButton
          type="submit"
          disabled={
            errors.name ||
            errors.description ||
            errors.salePrice ||
            errors.rating ||
            errors.stock ||
            errors.img ||
            errors.discount ||
            errors.purchasePrice ||
            errors.categories ||
            errors.suppliers
              ? true
              : false
          }
        >
          Create
        </StyledButton>
      </StyledForm>
    </Container>
  );
};

export default CreateProduct;
