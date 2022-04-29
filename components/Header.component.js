import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <header>
          <Image
            src="/logo.svg"
            alt="logo of the site"
            width={30}
            height={30}
          />
          <div className="searchBox">
            <select>
              <option value="">Any</option>
              <option value="">Near me</option>
            </select>
            <input type="text" />
            <div className="searchBtn">
              <Image
                src="/search.svg"
                alt="search icon for the site"
                width={18}
                height={18}
              />
            </div>
          </div>
          <div className="userSignIn">
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
        </header>
      </div>
    </>
  );
};

export default Header;
