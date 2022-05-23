import React from "react";
import PanelHeader from "../../components/PanelHeader.component";
import Sidebar from "../../components/Sidebar.component";

import styles from "../../styles/panel.module.css";
import SEO from "../../components/SEO";
import DashboardComp from "../../components/Dashboard.component";

const Dashboard = () => {
  return (
    <>
      <SEO title="Dashboard | Restaurant Panel" desc="Description" />
      <div className={styles.dFlex}>
        <Sidebar />
        <div className={styles.mainContent}>
          <PanelHeader />
          <DashboardComp />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
