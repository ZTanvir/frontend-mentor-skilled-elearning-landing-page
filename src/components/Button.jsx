import styles from "../styles/components/button.module.css";
const Button = ({ text, color, bgColor, hoverColor }) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.background = hoverColor;
    e.currentTarget.style.cursor = "pointer";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.background = bgColor;
  };
  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ background: bgColor, color }}
      className={styles.btnContainer}
    >
      {text}
    </button>
  );
};
export default Button;
