import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <header>
          <Image
            src="/logo.svg"
            alt="logo of the site"
            width={30}
            height={30}
          />
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
          <Link href="/login">
            <div className={styles.userSignIn}>
              <p>
                Hello, Signin {""}
                <Image
                  src="/downArrow.svg"
                  alt="down arrow for the site"
                  width={10}
                  height={10}
                />
              </p>
            </div>
          </Link>
        </header>
      </div>
    </>
  );
};

export default Header;
