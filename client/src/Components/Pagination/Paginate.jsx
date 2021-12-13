import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions";
import { ButtonPage, Pagination, LabelPage } from "./stylePag";

export const Paginate = () => {
  const [numberPag, setNumberPag] = useState(1);
  const totalPages = useSelector((state) => state.totalPages);
  const category = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(numberPag, category));
  }, [numberPag]);

  return (
    <Pagination>
      {numberPag > 1 ? (
        <ButtonPage onClick={() => setNumberPag(numberPag - 1)}>
          {"<"} Previous
        </ButtonPage>
      ) : null}
      <LabelPage br={"#ddd"}> {numberPag} </LabelPage>
      <LabelPage>de {totalPages}</LabelPage>
      {numberPag < totalPages ? (
        <ButtonPage onClick={() => setNumberPag(numberPag + 1)}>
          Next {">"}
        </ButtonPage>
      ) : null}
    </Pagination>
  );
};
