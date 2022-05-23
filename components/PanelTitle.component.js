import React from "react";
import styles from "../styles/panel.module.css";

const PanelTitle = ({ panelTitle }) => {
  return (
    <>
      <p className={styles.panelTitle}>{panelTitle}</p>
    </>
  );
};

export default PanelTitle;
