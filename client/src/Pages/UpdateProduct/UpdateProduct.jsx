import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getSuppliers,
  updateProduct,
} from "../../redux/actions/actionProducts";
import {
  Container,
  Content,
  Header,
  ImgContainer,
  Select,
  ShowCategories,
  StyledButton,
  StyledForm,
  Input,
  Label,
  Danger,
} from "../createProduct/styled.jsx";
import validate from "../createProduct/validate.jsx";
import { Toaster, toast } from "react-hot-toast";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getSuppliers());
  }, []);
  const product = useSelector((state) => state.products.productDetail);
  const allCategories = useSelector((state) => state.products.allCategories);
  const allSuppliers = useSelector((state) => state.products.allSuppliers);
  const initialState = {
    ...product,
    imgTotal: "",
    categories: product.Categories.map((category) => category.id),
    supplier: product.Supplier.id,
  };
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState(initialState);
  console.log(input);

  const handleChange = (e) => {
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
    let errors = validate({ ...input, [e.target.name]: e.target.value });
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(updateProduct(input));
    // eslint-disable-next-line no-undef
    toast.promise(saveSettings(settings), {
      loading: "Saving...",
      success: <b>Product edited successfully!</b>,
      error: <b>Product could not be edited(</b>,
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
    let error = validate({
      ...input,
      img: [...input.img, input.imgTotal],
      imgTotal: "",
    });
    setErrors(error);
  };

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
    let errors = validate({
      ...input,
      categories: [...input.categories, +e.target.value],
    });
    setErrors(errors);
  };

  const handleSelectSupplier = (e) => {
    if (e.target.value === "null") {
      setInput((input) => ({
        ...input,
        supplier: 0,
      }));
      let errors = validate({
        ...input,
        supplier: 0,
      });
      setErrors(errors);
    } else {
      setInput((input) => ({
        ...input,
        supplier: +e.target.value,
      }));
      let errors = validate({
        ...input,
        supplier: +e.target.value,
      });
      setErrors(errors);
    }
    console.log(errors.supplier);
  };

  const deleteImg = (e) => {
    const newImg = input.img.filter((img) => img !== e.target.value);
    setInput({
      ...input,
      img: newImg,
    });
    let errors = validate({
      ...input,
      img: newImg,
    });
    setErrors(errors);
  };

  const deleteCategory = (e) => {
    const newCategories = input.categories.filter(
      (category) => category !== +e.target.value
    );
    setInput({
      ...input,
      categories: newCategories,
    });
    let errors = validate({
      ...input,
      categories: newCategories,
    });
    setErrors(errors);
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Header>Update product</Header>
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
        <Content></Content>
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
          {input.img?.map((img) => (
            <ImgContainer key={img}>
              <img src={img} />
              <button onClick={deleteImg} value={img}>
                X
              </button>
            </ImgContainer>
          ))}
          {errors.img && <p className="danger">{errors.img}</p>}
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

          {allCategories.map(
            (category) =>
              input.categories.includes(category.id) && (
                <ShowCategories key={category.id}>
                  <p>{category.name}</p>
                  <button onClick={deleteCategory} value={category.id}>
                    X
                  </button>
                </ShowCategories>
              )
          )}

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
          Update
        </StyledButton>
      </StyledForm>
      <Toaster />
    </Container>
  );
};

export default UpdateProduct;
