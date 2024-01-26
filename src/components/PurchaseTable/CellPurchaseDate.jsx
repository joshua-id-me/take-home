import React from "react";
import styles from "./styles.scss";

const TableCellPurchaseDate = ({ purchaseDate }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return formattedDate;
  };
  return <td className={styles.tableWidth}>{formatDate(purchaseDate)}</td>;
};
export default TableCellPurchaseDate;
