import React from "react";
import PanelHeader from "../../../components/PanelHeader.component";
import Sidebar from "../../../components/Sidebar.component";

import styles from "../../../styles/panel.module.css";
import SEO from "../../../components/SEO";
import PanelTitle from "../../../components/PanelTitle.component";

import PanelSearchbar from "../../../components/PanelSearchbar.Component";

const Catogories = () => {
  return (
    <>
      <SEO title="Tables | Restaurant Panel" desc="Description" />
      <div className={styles.dFlex}>
        <Sidebar />
        <div className={styles.mainContent}>
          <PanelHeader />
          <div className={styles.panelMainContent}>
            <div className={styles.dTitleButton}>
              <PanelTitle panelTitle="Catogories" />
              <input type="button" value="Add" />
            </div>
            <div className={styles.CatogoriesContainer}>
              <PanelSearchbar />
              <div className={styles.catogoriesTable}>
                <div className={styles.catogoriesTableItem}>
                  <div className={styles.catogoriesTableItemTitle}>
                    <p>Catogories</p>
                  </div>
                  <p>Mo:Mo</p>
                  <p>Chowmein</p>
                  <p>Burger</p>
                  <p>Pizza</p>
                  <p>Sandwich</p>
                </div>
                <div className={styles.catogoriesTableItem}>
                  <div className={styles.catogoriesTableItemTitle}>
                    <p>Status</p>
                  </div>
                  <p>Enabled</p>
                  <p>Enabled</p>
                  <p>Enabled</p>
                  <p>Enabled</p>
                  <p>Disabled</p>
                </div>
                <div className={styles.catogoriesTableItem}>
                  <div className={styles.catogoriesTableItemTitle}>
                    <p>Action</p>
                  </div>
                  <p>Enabled</p>
                  <p>Enabled</p>
                  <p>Enabled</p>
                  <p>Enabled</p>
                  <p>Disabled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catogories;
