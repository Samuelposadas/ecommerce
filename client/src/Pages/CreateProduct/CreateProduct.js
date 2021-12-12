import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { initialValues, validationSchema } from "./schema";

const CreateProduct = () => {
  const submit = ({
    name,
    description,
    salePrice,
    rating,
    stock,
    img,
    discount,
    purchasePrice,
  }) => {
    console.log(
      name,
      description,
      salePrice,
      rating,
      stock,
      img,
      discount,
      purchasePrice
    );
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: (obj) => {
      submit(obj);
    },
  });

  console.log(formik?.errors);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            error={formik.errors.name}
            placeholder="product name"
            onChange={formik.handleChange}
          />
          {formik?.errors?.name && <span>{formik.errors.name}</span>}
        </div>
        <div>
          <input
            type="text"
            name="description"
            error={formik.errors.description}
            placeholder="product description"
            onChange={formik.handleChange}
          />
          {formik?.errors?.description && (
            <span>{formik.errors.description}</span>
          )}
        </div>
        <div>
          <input
            type="number"
            name="salePrice"
            error={formik.errors.salePrice}
            placeholder="product salePrice"
            onChange={formik.handleChange}
          />
          {formik?.errors?.salePrice && <span>{formik.errors.salePrice}</span>}
        </div>
        <div>
          <input
            type="number"
            name="rating"
            error={formik.errors.rating}
            placeholder="product rating"
            onChange={formik.handleChange}
          />
          {formik?.errors?.rating && <span>{formik.errors.rating}</span>}
        </div>
        <div>
          <input
            type="number"
            name="stock"
            error={formik.errors.stock}
            placeholder="product stock"
            onChange={formik.handleChange}
          />
          {formik?.errors?.stock && <span>{formik.errors.stock}</span>}
        </div>
        <div>
          <input
            type="text"
            name="img"
            error={formik.errors.img}
            placeholder="products salePrice"
            onChange={formik.handleChange}
          />
          {formik?.errors?.img && <span>{formik.errors.img}</span>}
        </div>
        <div>
          <input
            type="number"
            name="discount"
            error={formik.errors.discount}
            placeholder="product discount"
            onChange={formik.handleChange}
          />
          {formik?.errors?.discount && <span>{formik.errors.discount}</span>}
        </div>
        <div>
          <input
            type="number"
            name="purchasePrice"
            error={formik.errors.purchasePrice}
            placeholder="product purchasePrice"
            onChange={formik.handleChange}
          />
          {formik?.errors?.purchasePrice && (
            <span>{formik.errors.purchasePrice}</span>
          )}
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
