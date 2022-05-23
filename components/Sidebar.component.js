import React from "react";
import styles from "../styles/panel.module.css";
import Image from "next/image";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebarContainer}>
        <div className={styles.panelLogo}>
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="Restaurant Panel"
          />
        </div>
        <div className={styles.menuContainer}>
          <ul>
            <li>
              <Image
                src="/panel/dashboardicon.svg"
                width={25}
                height={25}
                alt="Dashboardicon"
              />
              <p>Dashboard</p>
            </li>
            <li>
              <Image
                src="/panel/tableicon.svg"
                width={25}
                height={25}
                alt="Tableicon"
              />
              <p>Table</p>
            </li>
            <li>
              <Image
                src="/panel/taxicon.svg"
                width={25}
                height={25}
                alt="Taxicon"
              />
              <p>Tax</p>
            </li>
            <li>
              <Image
                src="/panel/ordericon.svg"
                width={25}
                height={25}
                alt="Ordericon"
              />
              <p>Orders</p>
            </li>
            <li className={styles.dropdown}>
              <div className={styles.dropdownWrapper}>
                <Image
                  src="/panel/producticon.svg"
                  width={25}
                  height={25}
                  alt="Producticon"
                />
                <p>Product</p>
                <div className={styles.arrowDown}>
                  <Image
                    src="/downArrow.svg"
                    width={10}
                    height={10}
                    alt="Downarrow"
                  />
                </div>
              </div>
              <ul className={styles.dropdownItems}>
                <li>
                  <Image
                    src="/panel/catogoryicon.svg"
                    width={25}
                    height={25}
                    alt="Catogoryicon"
                  />
                  <p>Category</p>
                </li>
                <li>
                  <Image
                    src="/panel/menuicon.svg"
                    width={25}
                    height={25}
                    alt="menuicon"
                  />
                  <p>Menu</p>
                </li>
              </ul>
            </li>
            <li>
              <Image
                src="/panel/stafficon.svg"
                width={25}
                height={25}
                alt="Staffsicon"
              />
              <p>Staffs</p>
            </li>
            <li>
              <Image
                src="/panel/billingicon.svg"
                width={25}
                height={25}
                alt="Billingicon"
              />
              <p>Billing</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
