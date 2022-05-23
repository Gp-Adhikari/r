import React from "react";
import styles from "../../styles/panel.module.css";
import BlockedTable from "./BlockedTable.component";
import EmptyTable from "./EmptyTable.component";

const LiveTable = ({ className }) => {
  if (className === "tableContainer") {
    return (
      <>
        <div className={styles.tableContainerWrapper}>
          <p className={styles.title}>Tables</p>
          <div className={styles[className]}>
            <BlockedTable number={1} />
            <EmptyTable number={2} />
            <BlockedTable number={3} />
            <EmptyTable number={4} />
            <BlockedTable number={5} />
            <EmptyTable number={6} />
            <BlockedTable number={7} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles[className]}>
          <BlockedTable number={1} />
          <EmptyTable number={2} />
          <BlockedTable number={3} />
          <EmptyTable number={4} />
          <BlockedTable number={5} />
          <EmptyTable number={6} />
          <BlockedTable number={7} />
        </div>
      </>
    );
  }
};

export default LiveTable;
