import React, { useEffect, useState } from "react";
import validate from "./validate";
import { Toaster, toast } from "react-hot-toast";

import {
  getAllCategories,
  getSuppliers,
  postProducts,
} from "../../redux/actions/actionProducts";

import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Header,
  Content,
  Select,
  StyledButton,
  StyledForm,
} from "./styled";

const CreateProduct = () => {
  const initialState = {
    name: "",
    description: "",
    salePrice: "",
    rating: "",
    stock: "",
    imgTotal: "",
    img: [],
    purchasePrice: "",
    discount: "",
    categories: [],
    supplier: "",
  };
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.products.allCategories);
  const allSuppliers = useSelector((state) => state.products.allSuppliers);
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
    console.log(e.target.value);
    if (isNaN(parseInt(e.target.value))) {
      setInput((input) => ({
        ...input,
        [e.target.name]: e.target.value,
      }));
    } else {
      setInput((input) => ({
        ...input,
        [e.target.name]: parseInt(e.target.value),
      }));
    }
  }
  useEffect(() => {
    setErrors(validate(input));
  }, [input]);

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
    if (e.target.value === "null") {
      setInput((input) => ({
        ...input,
        supplier: 0,
      }));
    } else {
      setInput((input) => ({
        ...input,
        supplier: +e.target.value,
      }));
    }
    console.log(input.supplier);
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
    // eslint-disable-next-line no-undef
    toast.promise(saveSettings(settings), {
      loading: "Saving...",
      success: <b>Product Created Successfully!</b>,
      error: <b>error could not create the product.</b>,
    });
  };

  const handleClickImg = (e) => {
    e.preventDefault();
    if (
      !errors.imgTotal &&
      !input.img.includes(input.imgTotal) &&
      input.imgTotal
    ) {
      setInput((input) => ({
        ...input,
        img: [...input.img, input.imgTotal],
        imgTotal: "",
      }));
    }
  };
  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Header>Create a product</Header>
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
            name="imgTotal"
            placeholder="products img"
            value={input.imgTotal}
            onChange={handleChange}
          />
          <button onClick={handleClickImg}>Add img</button>
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
          {errors.supplier && <p className="danger">{errors.supplier}</p>}
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
            errors.supplier
          }
        >
          Create
        </StyledButton>
      </StyledForm>
      <Toaster />
    </Container>
  );
};

export default CreateProduct;
