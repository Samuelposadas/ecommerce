import React from "react";
import Item from "./Item.jsx";
import { StyledItemList } from "./styledItemList.jsx";

export default function ItemList({ title, rows, columns }) {
  return (
    <StyledItemList>
      <thead className="header">
        <tr className="row">
          <h3>{title}</h3>
          <button>New</button>
        </tr>
        <tr className="row">
          {columns.map((col) => {
            return (
              <td key={`${col.fieldHeader}`} className="itemColumnHeader">
                {col.fieldHeader}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody className="body">
        {rows.map((row, index) => {
          return <Item key={index} row={row} columns={columns} />;
        })}
      </tbody>
    </StyledItemList>
  );
}
