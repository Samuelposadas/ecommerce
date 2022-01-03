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
  Input,
  Label,
  Danger,
} from "./styled.jsx";

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
    supplier: 0,
  };
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.products.allCategories);
  const allSuppliers = useSelector((state) => state.products.allSuppliers);
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

    // if (e.target.value !== "") {
    //   setIsActive(true);
    // } else {
    //   setIsActive(false);
    // }
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
    if (!input.discount) {
      input.discount = 0;
    }
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
        <Header>Create product</Header>
        <Content>
          <Input
            error={errors.name}
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          <Label active={input.name}>Name</Label>
          {errors.name && <Danger>{errors.name}</Danger>}
        </Content>
        <Content>
          <Input
            error={errors.description}
            type="text"
            name="description"
            value={input.description}
            onChange={handleChange}
          />
          <Label active={input.description}>Description</Label>
          {errors.description && <Danger>{errors.description}</Danger>}
        </Content>
        <Content>
          <Input
            error={errors.salePrice}
            type="number"
            name="salePrice"
            value={input.salePrice}
            onChange={handleChange}
          />
          <Label active={input.salePrice}>Sale Price</Label>
          {errors.salePrice && <Danger>{errors.salePrice}</Danger>}
        </Content>
        <Content>
          <Input
            error={errors.rating}
            type="number"
            name="rating"
            value={input.rating}
            onChange={handleChange}
          />
          <Label active={input.rating}>Rating</Label>
          {errors.rating && <Danger>{errors.rating}</Danger>}
        </Content>
        <Content>
          <Input
            error={errors.stock}
            type="number"
            name="stock"
            value={input.stock}
            onChange={handleChange}
          />
          <Label active={input.stock}>Stock</Label>
          {errors.stock && <Danger>{errors.stock}</Danger>}
        </Content>
        <Content>
          <Input
            error={errors.img}
            type="text"
            name="imgTotal"
            value={input.imgTotal}
            onChange={handleChange}
          />
          <Label active={input.imgTotal}>Images</Label>
          <StyledButton onClick={handleClickImg}>Add img</StyledButton>
          {errors.img && <Danger>{errors.img}</Danger>}
        </Content>
        <Content>
          <Input
            error={errors.discount}
            type="number"
            name="discount"
            value={input.discount}
            onChange={handleChange}
          />
          <Label active={input.discount}>Discount</Label>
          {errors.discount && <Danger>{errors.discount}</Danger>}
        </Content>
        <Content>
          <Input
            error={errors.purchasePrice}
            type="number"
            name="purchasePrice"
            value={input.purchasePrice}
            onChange={handleChange}
          />
          <Label active={input.purchasePrice}>Purchase Price</Label>
          {errors.purchasePrice && <Danger>{errors.purchasePrice}</Danger>}
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
