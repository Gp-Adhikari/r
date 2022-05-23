import React from "react";
import PanelHeader from "../../../components/PanelHeader.component";
import Sidebar from "../../../components/Sidebar.component";

import styles from "../../../styles/panel.module.css";
import SEO from "../../../components/SEO";
import PanelTitle from "../../../components/PanelTitle.component";

import PanelSearchbar from "../../../components/PanelSearchbar.Component";

const Tables = () => {
  return (
    <>
      <SEO title="Tables | Restaurant Panel" desc="Description" />
      <div className={styles.dFlex}>
        <Sidebar />
        <div className={styles.mainContent}>
          <PanelHeader />
          <div className={styles.panelMainContent}>
            <div className={styles.dTitleButton}>
              <PanelTitle panelTitle="Table List" />
              <input type="button" value="Add" />
            </div>
            <div className={styles.tableListContainer}>
              <PanelSearchbar />
              <div className={styles.tableListContent}>
                <div className={styles.tableListItem}>
                  <div className={styles.tableListItemTitle}>
                    <p>Table Name</p>
                  </div>
                  <p>Table 1</p>
                  <p>Table 2</p>
                  <p>Table 3</p>
                  <p>Table 4</p>
                  <p>Table 5</p>
                  <p>Table 6</p>
                  <p>Table 7</p>
                </div>

                <div className={styles.tableListItem}>
                  <div className={styles.tableListItemTitle}>
                    <p>Table Capacity</p>
                  </div>
                  <p>2 Person</p>
                  <p>4 Person</p>
                  <p>6 Person</p>
                  <p>7 Person</p>
                  <p>8 Person</p>
                  <p>8 Person</p>
                  <p>7 Person</p>
                </div>
                <div className={styles.tableListItem}>
                  <div className={styles.tableListItemTitle}>
                    <p>Status</p>
                  </div>
                  <p>Enabled</p>
                  <p>Enabled</p>
                  <p>Enabled</p>
                  <p>Disabled</p>
                  <p>Disabled</p>
                  <p>Enabled</p>
                  <p>Enabled</p>
                </div>
                <div className={styles.tableListItem}>
                  <div className={styles.tableListItemTitle}>
                    <p>Action</p>
                  </div>
                  <p>Enabled</p>
                  <p>Enabled</p>
                  <p>Enabled</p>
                  <p>Disabled</p>
                  <p>Disabled</p>
                  <p>Enabled</p>
                  <p>Enabled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tables;
