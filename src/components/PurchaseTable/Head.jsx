import React from "react";
import styles from "./styles.scss";
const TableHead = ({ headers }) => {
  return (
    <thead className={styles.tbHeader}>
      <tr className={styles.tableRow}>
        {headers.map((header, id) => {
          return (
            <th className={styles.tbHead} key={`table${id}`}>
              {header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
export default TableHead;
