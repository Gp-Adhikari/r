import Image from "next/image";
import SEO from "../../components/SEO";

import { useRouter } from "next/router";

import styles from "../../styles/auth.module.css";
import CustomInputField from "../../components/CustomInputField.component";

const Login = () => {
  const router = useRouter();

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
              <p>Don't have and account? </p>
              <p>Create</p>
            </div>

            <div className={styles.navigate}>
              <p>As User</p>
              <p>As Restaurant</p>
            </div>

            <CustomInputField
              title="Phone Number"
              inputType="text"
              imgFirst="/auth/user_profile.svg"
            />
            <CustomInputField
              title="Password"
              inputType="password"
              imgFirst="/auth/password.svg"
              imgSecond="/auth/hide.svg"
            />
            <button className={styles.loginButton}>Login</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
