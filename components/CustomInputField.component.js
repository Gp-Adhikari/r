import styles from "../styles/auth.module.css";
import Image from "next/image";

const CustomInputField = ({ title, inputType, img }) => {
  console.log(img);
  return (
    <div className={styles.custom_input_field}>
      <p>{title}</p>
      <div className={styles.input_field}>
        {img !== undefined ? (
          <Image
            src={img}
            className={styles.icon}
            alt="user icon"
            width={15}
            height={15}
          />
        ) : null}
        <input type={inputType} />
      </div>
    </div>
  );
};

export default CustomInputField;
