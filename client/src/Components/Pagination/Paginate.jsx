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
  const order = useSelector((state) => state.order);
  const nameProduct = useSelector((state) => state.nameProduct);

  useEffect(() => {
    dispatch(getAllProducts(numberPag, category, order, nameProduct));
  }, [numberPag]);

  useEffect(() => {
    if (totalPages === 0) {
      return;
    }
    if (totalPages <= numberPag) {
      setNumberPag(totalPages);
    }
  }, [totalPages]);

  return (
    <Pagination>
      {numberPag > 1 ? (
        <ButtonPage onClick={() => setNumberPag(numberPag - 1)}>
          {"<"} Previous
        </ButtonPage>
      ) : null}
      {totalPages < 1 ? null : (
        <>
          <LabelPage br={"#ddd"}> {numberPag} </LabelPage>
          <LabelPage>de {totalPages}</LabelPage>
        </>
      )}
      {numberPag < totalPages ? (
        <ButtonPage onClick={() => setNumberPag(numberPag + 1)}>
          Next {">"}
        </ButtonPage>
      ) : null}
    </Pagination>
  );
};
