import { useState } from "react";
import Image from "next/image";
import SEO from "../../components/SEO";

import { useRouter } from "next/router";

import styles from "../../styles/auth.module.css";
import CustomInputField from "../../components/CustomInputField.component";
import Link from "next/link";

export const getStaticPaths = async () => {
  const paths = [{ params: { id: "user" } }, { params: { id: "restaurant" } }];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      currentPath: params.id,
    },
  };
};

const UserAndRestrauntLogin = ({ currentPath }) => {
  const router = useRouter();
  const [showUserPassword, setShowUserPassword] = useState(false);
  const [showRestaurantPassword, setShowRestaurantPassword] = useState(false);

  if (currentPath === "user") {
    return (
      <>
        <SEO title="Login" desc="Login to R for more features." />
        <section className={styles.loginWrapper}>
          <Image
            className={styles.logo}
            src="/dark_logo.svg"
            alt="logo of the site"
            width={50}
            height={50}
            onClick={() => {
              router.push("/");
            }}
          />

          {/* login form */}

          <div className={styles.loginForm}>
            <div className={styles.formDesign}></div>
            <div className={styles.actualForm}>
              <h1 className={styles.h1Center}>Log In</h1>
              <div className={styles.createAccount}>
                <p>Don&apos;t have and account? </p>
                <Link href="/signup" passHref={true}>
                  <p>Create</p>
                </Link>
              </div>

              <div className={styles.navigate}>
                <p className={styles.current}>As User</p>
                <p onClick={() => router.push("/login/restaurant")}>
                  As Restaurant
                </p>
              </div>

              <CustomInputField
                title="Phone Number"
                inputType="text"
                fieldType="number"
                imgFirst="/auth/phone.svg"
              />
              <CustomInputField
                title="Password"
                inputType="password"
                imgFirst="/auth/password.svg"
                imgSecond={
                  !showUserPassword ? "/auth/hide.svg" : "/auth/show.svg"
                }
                showUserPassword={showUserPassword}
                setShowUserPassword={setShowUserPassword}
              />
              <button className={styles.loginButton}>Login</button>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <SEO title="Restaurant" desc="Restaurant to R for more features." />
        <section className={styles.loginWrapper}>
          <Image
            className={styles.logo}
            src="/dark_logo.svg"
            alt="logo of the site"
            width={50}
            height={50}
            onClick={() => {
              router.push("/");
            }}
          />

          {/* Restaurant form */}

          <div className={styles.loginForm}>
            <div className={styles.formDesign}></div>
            <div className={styles.actualForm}>
              <h1 className={styles.h1Center}>Log In</h1>
              <div className={styles.createAccount}>
                <p>Don&apos;t have and account? </p>
                <Link href="/signup/restaurant" passHref={true}>
                  <p>Create</p>
                </Link>
              </div>

              <div className={styles.navigate}>
                <p onClick={() => router.push("/login/user")}>As User</p>
                <p className={styles.current}>As Restaurant</p>
              </div>

              <CustomInputField
                title="Email"
                inputType="text"
                fieldType="number"
                imgFirst="/auth/phone.svg"
              />
              <CustomInputField
                title="Password"
                inputType="password"
                imgFirst="/auth/password.svg"
                imgSecond={
                  !showUserPassword ? "/auth/hide.svg" : "/auth/show.svg"
                }
                showUserPassword={showRestaurantPassword}
                setShowUserPassword={setShowRestaurantPassword}
              />
              <button className={styles.loginButton}>Login</button>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default UserAndRestrauntLogin;
