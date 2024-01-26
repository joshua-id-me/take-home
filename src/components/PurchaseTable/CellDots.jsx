import React from "react";
import styles from "./styles.scss";
const TableCellDots = () => {
  return (
    <td className={styles.tableWidth}>
      <svg
        width="48"
        height="64"
        viewBox="0 0 48 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 28C25.1045 28 26 27.1046 26 26C26 24.8954 25.1045 24 24 24C22.8955 24 22 24.8954 22 26C22 27.1046 22.8955 28 24 28Z"
          fill="#6B6C7E"
        />
        <path
          d="M26 31.9844C26 33.0889 25.1045 33.9844 24 33.9844C22.8955 33.9844 22 33.0889 22 31.9844C22 30.8798 22.8955 29.9844 24 29.9844C25.1045 29.9844 26 30.8798 26 31.9844Z"
          fill="#6B6C7E"
        />
        <path
          d="M26 38C26 39.1046 25.1045 40 24 40C22.8955 40 22 39.1046 22 38C22 36.8954 22.8955 36 24 36C25.1045 36 26 36.8954 26 38Z"
          fill="#6B6C7E"
        />
      </svg>
    </td>
  );
};
export default TableCellDots;
