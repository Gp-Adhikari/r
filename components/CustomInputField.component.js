import { useRef } from "react";
import styles from "../styles/auth.module.css";
import Image from "next/image";

const CustomInputField = ({
  title,
  inputType,
  imgFirst,
  imgSecond,
  showUserPassword,
  setShowUserPassword,
  fieldType,
  value,
  setValue,
}) => {
  const inputRef = useRef(null);

  return (
    <div className={styles.custom_input_field}>
      <p>{title}</p>
      <div className={styles.input_field}>
        {imgFirst !== undefined ? (
          <Image src={imgFirst} alt="user icon" width={20} height={20} />
        ) : null}
        <input
          type={inputType}
          ref={inputRef}
          value={value}
          onChange={(e) => {
            if (fieldType === "number") {
              setValue(e.target.value.replace(/[^0-9]/g, ""));
            }
          }}
        />
        {imgSecond !== undefined ? (
          <Image
            src={imgSecond}
            className={styles.icon}
            alt="user icon"
            width={15}
            height={15}
            onClick={() => {
              if (showUserPassword) {
                setShowUserPassword(false);
                inputRef.current.type = "password";
              } else {
                setShowUserPassword(true);
                inputRef.current.type = "text";
              }
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CustomInputField;
