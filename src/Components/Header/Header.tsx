import React from "react";
import NavBar from "../NavBar/NavBar";

// Styling
import styles from "./Header.module.scss";

const Header: React.FC = () => (
  <header className={styles.container}>
    <NavBar />
  </header>
);

export default Header;
