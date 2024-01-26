import React from "react";
import styles from "./styles.scss";
import TableCellImage from "./CellImage";
import TableCellPurchaseDate from "./CellPurchaseDate";
import TableCellCategory from "./CellCategory";
import TableCellPrice from "./CellPrice";
import TableCellDots from "./CellDots";
const TableRow = ({ purchase }) => {
  return (
    <tr className={styles.tbRow}>
      <th className={styles.tbHead} scope="col">
        {purchase.name}
      </th>
      <TableCellImage imgSrc={purchase.location} />
      <TableCellPurchaseDate purchaseDate={purchase.purchaseDate} />
      <TableCellCategory category={purchase.category} />
      <td className={styles.info}>{purchase.description}</td>
      <TableCellPrice price={purchase.price} />
      <TableCellDots />
    </tr>
  );
};
export default TableRow;
