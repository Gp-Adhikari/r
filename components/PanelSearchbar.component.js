import React from "react";
import styles from "../styles/panel.module.css";

const PanelSearchbar = () => {
  return (
    <>
      <div className={styles.searchBox}>
        <select>
          <option value="">Any</option>
          <option value="">Near me</option>
        </select>
        <input type="text" placeholder="Search.." />
      </div>
    </>
  );
};
export default PanelSearchbar;
