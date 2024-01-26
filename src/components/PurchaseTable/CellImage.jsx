import React from "react";
import styles from "./styles.scss";
const TableCellImage = ({ imgSrc }) => {
  return (
    <td className={`${styles.tableWidth}`}>
      <img className={styles.tbImage} src={imgSrc}></img>
    </td>
  );
};
export default TableCellImage;
