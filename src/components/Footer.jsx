import Button from "./Button";
import styles from "../styles/components/navbar.module.css";
import logoLight from "../assets/logo-light.svg";

const Footer = () => {
  return (
    <ul className={styles.navBarContent}>
      <li>
        <img
          src={logoLight}
          alt="Logo of the website.In the logo the text skilled is written."
        />
      </li>
      <li>
        <Button
          text="get started"
          bgColor="linear-gradient(#4851FF, #F02AA6)"
          color="white"
          hoverColor="linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, #4851ff -54.32%, #f02aa6 100%)"
        />
      </li>
    </ul>
  );
};

export default Footer;
