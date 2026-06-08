import styles from "./Button.module.css";

console.log(styles);

export const Button = ({ variant, disabled, children }) => {
  const disabledCheck = disabled ? "disabled" : "";
  console.log(variant);
  return (
    <button className={`${styles[variant]} ${styles[disabledCheck]}`}>
      {children}
    </button>
  );
};
