import React from "react";
import styles from "./styles.scss";
const TableCellPrice = ({ price }) => {
  const formatToUSD = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(amount);
  };
  return <td className={`${styles.price}`}>{formatToUSD(price)}</td>;
};
export default TableCellPrice;
