import React from "react";
import styles from "../styles/panel.module.css";
import PanelTitle from "./PanelTitle.component";
import LiveTable from "./TableContainer/LiveTable.component";

const DashboardComp = () => {
  return (
    <>
      <div className={styles.panelMainContent}>
        <PanelTitle panelTitle={`Dashboard`} />
        <div className={styles.dashboardContent}>
          <div className={`${styles.DashboardCard} ${styles.today_sale}`}>
            <p>TOTAL'S SALE</p>
            <p>NPR 2,000</p>
          </div>
          <div className={`${styles.DashboardCard} ${styles.total_sale}`}>
            <p>ALL TIME SALE</p>
            <p>NPR 200,000</p>
          </div>
          <div className={`${styles.DashboardCard} ${styles.remain_order}`}>
            <p>REMAINING ORDERS</p>
            <p>5</p>
          </div>
        </div>
        <PanelTitle panelTitle={`Live Table Status`} />
        <LiveTable className="liveTableContainer" />
      </div>
    </>
  );
};

export default DashboardComp;
