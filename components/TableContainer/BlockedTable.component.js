import React from "react";
import styles from "../../styles/panel.module.css";

const BlockedTable = ({ number }) => {
  return (
    <>
      <div className={styles.blockedTableContainer}>
        <p>Table {number}</p>
        <p>Blocked</p>
      </div>
    </>
  );
};

export default BlockedTable;
