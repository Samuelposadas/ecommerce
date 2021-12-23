import React from "react";

import { StyledItem } from "./styledItem.jsx";

export default function Item({ row, columns }) {
  return (
    <StyledItem>
      {columns.map((col) => {
        return (
          <td key={`${col.field}${row.id}`} className="itemColumn">
            {col.render ? col.render(row) : row[col.field]}
          </td>
        );
      })}
    </StyledItem>
  );
}
