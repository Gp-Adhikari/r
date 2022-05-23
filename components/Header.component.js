import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";

const Header = () => {
  const tooltipRef = useRef(null);
  const tooltip = () => {
    if (tooltipRef.current.style.display === "none") {
      tooltipRef.current.style.display = "flex";
    } else {
      tooltipRef.current.style.display = "none";
    }
  };
  return (
    <>
      <div className={styles.headerWrapper}>
        <header>
          <div className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="logo of the site"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.searchBox}>
            <select>
              <option value="">Any</option>
              <option value="">Near me</option>
            </select>
            <input type="text" />
            <div className={styles.searchBtn}>
              <Image
                src="/search.svg"
                alt="search icon for the site"
                width={18}
                height={18}
              />
            </div>
          </div>
          <div
            className={styles.userAndRestaurantLogSignWrapper}
            onClick={() => tooltip()}
          >
            <div className={styles.userSignIn}>
              <p>
                Hello, Signin {""}
                <Image
                  src="/downArrow.svg"
                  alt="down arrow"
                  width={10}
                  height={10}
                />
              </p>
              <div className={styles.userAndRestaurantLogSign} ref={tooltipRef}>
                <div className={styles.upArrow}>
                  <Image
                    src="/upArrow.svg"
                    alt="uparrow"
                    width={10}
                    height={10}
                  />
                </div>
                <div className={styles.userAndRestaurantLogSignContainer}>
                  <div className={styles.userAndRestaurantLogSignContent}>
                    <div className={styles.userLogSign}>
                      <Image src="/user-outlined.svg" width={30} height={30} />
                      <h3>User</h3>
                      <Link href="/login/user" passHref={true}>
                        <input type="button" value="Login" />
                      </Link>
                      <p>or</p>
                      <Link href="/signup/user" passHref={true}>
                        <input type="button" value="Sign Up" />
                      </Link>
                    </div>
                    <div className={styles.restaurantLogSign}>
                      <Image
                        src="/auth/pink_restaurant_menu.svg"
                        width={30}
                        height={30}
                      />
                      <h3>Restaurant</h3>
                      <Link href="/login/restaurant" passHref={true}>
                        <input type="button" value="Login" />
                      </Link>
                      <p>or</p>
                      <Link href="/signup/restaurant" passHref={true}>
                        <input type="button" value="Sign Up" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
