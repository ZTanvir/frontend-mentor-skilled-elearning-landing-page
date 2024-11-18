import Button from "./Button";
import styles from "../styles/components/navbar.module.css";
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";

const NavBar = ({ theme }) => {
  return (
    <nav className={styles.navBarContainer}>
      <ul>
        <li>
          <img
            src={theme === "dark" ? logoLight : logoDark}
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
    </nav>
  );
};
export default NavBar;
