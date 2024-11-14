import styles from "../styles/components/button.module.css";
const Button = ({ text, color, bgColor }) => {
  return (
    <button
      style={{ background: bgColor, color }}
      className={styles.btnContainer}
    >
      {text}
    </button>
  );
};
export default Button;
