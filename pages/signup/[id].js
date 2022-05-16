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

const UserAndRestrauntSignUp = ({ currentPath }) => {
  const router = useRouter();
  const [showUserPassword, setShowUserPassword] = useState(false);
  const [showRestaurantPassword, setShowRestaurantPassword] = useState(false);

  if (currentPath === "user") {
    return (
      <>
        <SEO title="Sign Up" desc="Sign Up to R for more features." />
        <section className={styles.loginWrapper}>
          <div className={styles.logo}>
            <Image
              src="/dark_logo.svg"
              alt="logo of the site"
              width={50}
              height={50}
              objectFit="cover"
              onClick={() => {
                router.push("/");
              }}
            />
          </div>

          {/* user form */}

          <div className={styles.loginForm}>
            <div className={styles.formDesign}></div>
            <div className={styles.actualForm}>
              <h1 className={`${styles.h1Center} ${styles.h1Small}`}>
                Create Account
              </h1>
              <div className={styles.createAccount}>
                <p>Already have an account? </p>
                <Link href="/login/user" passHref={true}>
                  <p>Log In</p>
                </Link>
              </div>

              <div className={styles.navigate}>
                <p className={styles.currentUser}>As User</p>
                <Link href="/signup/restaurant" passHref={true}>
                  <p>As Restaurant</p>
                </Link>
              </div>

              <CustomInputField
                title="Full Name"
                inputType="text"
                imgFirst="/auth/user.svg"
              />
              <CustomInputField
                title="Phone Number"
                inputType="text"
                imgFirst="/auth/phone.svg"
                fieldType="number"
              />
              <CustomInputField
                title="Password"
                inputType="password"
                imgFirst="/auth/key.svg"
                imgSecond={
                  !showUserPassword ? "/auth/hide.svg" : "/auth/show.svg"
                }
                showUserPassword={showUserPassword}
                setShowUserPassword={setShowUserPassword}
              />
              <CustomInputField
                title="Confirm Password"
                inputType="password"
                imgFirst="/auth/key.svg"
                imgSecond={
                  !showUserPassword ? "/auth/hide.svg" : "/auth/show.svg"
                }
                showUserPassword={showUserPassword}
                setShowUserPassword={setShowUserPassword}
              />
              <button
                className={`${styles.loginButton} ${styles.signUpButton}`}
              >
                Create Account
              </button>
            </div>
          </div>
        </section>
      </>
    );
  } else if (currentPath === "restaurant") {
    return (
      <>
        <SEO title="Sign Up" desc="Sign Up to R for more features." />
        <section className={styles.loginWrapper}>
          <div className={styles.logo}>
            <Image
              src="/dark_logo.svg"
              alt="logo of the site"
              width={50}
              height={50}
              objectFit="cover"
              onClick={() => {
                router.push("/");
              }}
            />
          </div>

          {/* Restaurant form */}

          <div className={styles.loginForm}>
            <div className={styles.formDesign}></div>
            <div className={styles.actualForm}>
              <h1 className={`${styles.h1Center} ${styles.h1Small}`}>
                Create Account
              </h1>
              <div className={styles.createAccount}>
                <p>Already have an account? </p>
                <Link href="/login/restaurant" passHref={true}>
                  <p>Log In</p>
                </Link>
              </div>

              <div className={styles.navigate}>
                <Link href="/signup/user" passHref={true}>
                  <p>As User</p>
                </Link>
                <p
                  className={`${styles.currentUser} ${styles.currentRestaurant}`}
                >
                  As Restaurant
                </p>
              </div>

              <CustomInputField
                title="Restaurant Name"
                inputType="text"
                imgFirst="/auth/pink_restaurant_menu.svg"
              />
              <CustomInputField
                title="Email"
                inputType="email"
                imgFirst="/auth/pink_email.svg"
              />
              <div className="location">
                <p>Location</p>
              </div>
              <CustomInputField
                title="Password"
                inputType="password"
                imgFirst="/auth/pink_key.svg"
                imgSecond={
                  !showUserPassword ? "/auth/hide.svg" : "/auth/show.svg"
                }
                showUserPassword={showRestaurantPassword}
                setShowUserPassword={setShowRestaurantPassword}
              />
              <CustomInputField
                title="Confirm Password"
                inputType="password"
                imgFirst="/auth/pink_key.svg"
                imgSecond={
                  !showUserPassword ? "/auth/hide.svg" : "/auth/show.svg"
                }
                showUserPassword={showRestaurantPassword}
                setShowUserPassword={setShowRestaurantPassword}
              />
              <button
                className={`${styles.loginButton} ${styles.signUpButton}`}
              >
                Create Account
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
};
export default UserAndRestrauntSignUp;
