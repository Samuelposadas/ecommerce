import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../../Components/ItemList/ItemList.jsx";
import { getProductByFilter } from "../../redux/actions/actionProducts";
import { StyledAdminProducts } from "./styled.jsx";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

export default function AdminProducts() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const product_controllers = useSelector(
    (state) => state.products.productsControllers
  );

  useEffect(() => {
    dispatch(getProductByFilter(product_controllers));
  }, []);

  const columns = [
    { field: "id", fieldHeader: "ID" },
    {
      field: "name",
      fieldHeader: "Product",
      render: (params) => {
        return (
          <div className="product">
            <img src={params.img[0]} alt="" />
            <div className="productName">{params.name}</div>
          </div>
        );
      },
    },
    { field: "salePrice", fieldHeader: "Sale Price" },
    { field: "stock", fieldHeader: "Stock" },
    {
      fiel: "actions",
      fieldHeader: "Actions",
      render: (params) => {
        return (
          <div className="actionsColumn">
            <Link to={`/products/${params.id}`} className="editItem">
              Edit
            </Link>
            <DeleteOutlineIcon className="deleteItem" />
          </div>
        );
      },
    },
  ];

  return (
    <StyledAdminProducts>
      <div className="productsWrapper">
        <ItemList rows={allProducts} columns={columns} title="Products" />
      </div>
    </StyledAdminProducts>
  );
}
