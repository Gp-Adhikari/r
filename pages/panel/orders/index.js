import React from "react";
import PanelHeader from "../../../components/PanelHeader.component";
import Sidebar from "../../../components/Sidebar.component";

import styles from "../../../styles/panel.module.css";
import SEO from "../../../components/SEO";
import LiveTable from "../../../components/TableContainer/LiveTable.component";
import PanelTitle from "../../../components/PanelTitle.component";
import OrderComp from "../../../components/OrderComp.component";

const Orders = () => {
  return (
    <>
      <SEO title="Orders | Restaurant Panel" desc="Description" />
      <div className={styles.dFlex}>
        <Sidebar />
        <div className={styles.mainContent}>
          <PanelHeader />
          <div className={styles.panelMainContent}>
            <PanelTitle panelTitle="Orders" />
            <div className={styles.dGrid}>
              <LiveTable className="tableContainer" />
              <OrderComp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
