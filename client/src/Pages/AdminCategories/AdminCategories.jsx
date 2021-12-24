import React, { useEffect } from "react";
import ItemList from "../../Components/ItemList/ItemList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { StyledAdminCategories } from "./styled.jsx";
import { getAllCategories } from "../../redux/actions/actionProducts";
import axios from "axios";
import { URL_BASE } from "../../redux/constants";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function AdminCategories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.allCategories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const handleDelete = async (categoryName) => {
    // alert(`Are you sure to delete the category ${categoryName}`);
    try {
      await axios({
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

  const columns = [
    { field: "id", fieldHeader: "ID" },
    { field: "name", fieldHeader: "Category Name" },
    {
      fiel: "actions",
      fieldHeader: "Actions",
      render: (params) => {
        return (
          <div className="actionsColumn">
            <button type="button" className="editItem">
              Edit
            </button>
            <DeleteOutlineIcon
              className="deleteItem"
              onClick={() => handleDelete(params.name)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <StyledAdminCategories>
      <div className="categoriesWrapper">
        <ItemList title="Categories" rows={categories} columns={columns} />
      </div>
    </StyledAdminCategories>
  );
}
