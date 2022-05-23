import React from "react";
import styles from "../styles/panel.module.css";
import Image from "next/image";

const PanelHeader = () => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <header>
          <div className={styles.restaurantInfo}>
            <p>Restro</p>
            <div className={styles.restaurantLogo}>
              <Image
                src="/panel/restrologo.svg"
                width={25}
                height={25}
                alt="Restaurant Logo"
              />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default PanelHeader;
