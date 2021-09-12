import React from "react";
import Buttons from "../Buttons/Buttons";

// Styling
import styles from "./NavBar.module.scss";

const NavBar: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.logo}>SuperDev</div>
    <div className={styles.buttons}>
      <Buttons>Register</Buttons>
    </div>
  </div>
);

export default NavBar;
