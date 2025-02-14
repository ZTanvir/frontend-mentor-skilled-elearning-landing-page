import Button from "./Button";
import styles from "../styles/components/navbar.module.css";
import logoDark from "../assets/logo-dark.svg";

const NavBar = ({}) => {
  return (
    <ul className={styles.navBarContent}>
      <li>
        <img
          src={logoDark}
          alt="Logo of the website.In the logo the text skilled is written."
        />
      </li>
      <li>
        <Button
          text="get started"
          bgColor="#13183F"
          color="white"
          hoverColor="#666CA3"
        />
      </li>
    </ul>
  );
};
export default NavBar;
