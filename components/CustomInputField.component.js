import styles from "../styles/auth.module.css";
import Image from "next/image";

const CustomInputField = ({ title, inputType, imgFirst, imgSecond }) => {
  return (
    <div className={styles.custom_input_field}>
      <p>{title}</p>
      <div className={styles.input_field}>
        {imgFirst !== undefined ? (
          <Image
            src={imgFirst}
            className={styles.icon}
            alt="user icon"
            width={20}
            height={20}
          />
        ) : null}
        <input type={inputType} />
        {imgSecond !== undefined ? (
          <Image
            src={imgSecond}
            className={styles.icon}
            alt="user icon"
            width={15}
            height={15}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CustomInputField;
