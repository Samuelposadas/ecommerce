import * as Yup from "yup";

export const initialValues = {
  name: "",
  description: "",
  salePrice: 0,
  rating: 0,
  stock: 0,
  img: [],
  discount: 0,
  purchasePrice: 0,
};

export const validationSchema = {
  name: Yup.string().min(5, "min 5 characters").required("name is required"),
  description: Yup.string()
    .min(10, "min 10 characters")
    .required("description is required"),
  salePrice: Yup.number().min(1, "min $1").required("salePrice is required"),
  rating: Yup.number().min(1, "min 1 star").required("rating is required"),
  stock: Yup.number().min(1, "min $1").required("stock is required"),
  img: Yup.array().min(1, "min 1 img").required("img is required"),
  discount: Yup.number(),
  purchasePrice: Yup.number()
    .min(1, "min $1")
    .required("purchasePrice is required"),
};
