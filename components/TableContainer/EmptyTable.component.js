import React from "react";
import styles from "../../styles/panel.module.css";

const EmptyTable = ({ number }) => {
  return (
    <>
      <div className={styles.emptyTableContainer}>
        <p>Table {number}</p>
        <p>Empty</p>
      </div>
    </>
  );
};

export default EmptyTable;
