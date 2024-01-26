import React from "react";
import TableHead from "./Head";
import TableRow from "./Row";
import styles from "./styles.scss";
const PurchaseTable = ({ purchases }) => {
  const tableHeaders = [
    "Name",
    "Location",
    "Purchase Date",
    "Category",
    "Description",
    "Price",
    "",
  ];
  return (
    <table className={styles.table}>
      <TableHead headers={tableHeaders} />
      <tbody>
        {purchases.map((purchase) => (
          <TableRow key={purchase.id} purchase={purchase} />
        ))}
      </tbody>
    </table>
  );
};
export default PurchaseTable;
