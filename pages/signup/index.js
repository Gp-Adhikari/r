import { useState } from "react";
import Image from "next/image";
import SEO from "../../components/SEO";

import { useRouter } from "next/router";

import styles from "../../styles/auth.module.css";
import CustomInputField from "../../components/CustomInputField.component";
import Link from "next/link";

const Signup = () => {
  const router = useRouter();
  const [showUserPassword, setShowUserPassword] = useState(false);

  return (
    <>
      <SEO title="Sign Up" desc="Sign Up to R for more features." />
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
              <p>As User</p>
              <p>As Restaurant</p>
            </div>

            <CustomInputField
              title="First Name"
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
            <button className={`${styles.loginButton} ${styles.signUpButton}`}>
              Create Account
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
