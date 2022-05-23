import React from "react";
import styles from "../styles/panel.module.css";
import Image from "next/image";

const OrderComp = () => {
  return (
    <>
      <div className={styles.tableContainerWrapper}>
        <p className={styles.title}>Orders</p>
        <div className={styles.orderContainer}>
          <div className={styles.orderTableItem}>
            <div className={styles.orderTableItemTitle}>
              <p>Items</p>
            </div>
            <p>Veg. Momo</p>
            <p>Veg. Chowmein</p>
          </div>
          <div className={styles.orderTableItem}>
            <div className={styles.orderTableItemTitle}>
              <p>Quantity</p>
            </div>
            <p>1</p>
            <p>3</p>
          </div>
          <div className={styles.orderTableItem}>
            <div className={styles.orderTableItemTitle}>
              <p>Rate</p>
            </div>
            <p>NPR 70</p>
            <p>NPR 80</p>
          </div>
          <div className={styles.orderTableItem}>
            <div className={styles.orderTableItemTitle}>
              <p>Amount</p>
            </div>
            <p>70</p>
            <p>210</p>
          </div>
          <div className={styles.orderTableItem}>
            <div className={styles.orderTableItemTitle}>
              <p>Action</p>
            </div>
            <p>dfhfdf</p>
            <p>Abcd</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderComp;
