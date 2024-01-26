import React from "react";
import styles from "./styles.scss";
import buttons from "./buttons.scss";
const categoryColors = {
  technology: "grey",
  shopping: "green",
  entertainment: "blue",
  automotive: "red",
  default: "grey",
};
const TableCellCategory = ({ category }) => {
  return (
    <td className={styles.tableWidth}>
      <button
        className={`${buttons["category"]} ${
          buttons[categoryColors[category.toLowerCase()]] ||
          buttons[categoryColors.default]
        }
          `}
      >
        {category}
      </button>
    </td>
  );
};
export default TableCellCategory;
