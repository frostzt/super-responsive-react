import React from "react";

// Styling
import cx from "classnames";
import styles from "./Header.module.scss";

// Components
import NavBar from "../NavBar/NavBar";

const Header: React.FC = () => (
  <header className={styles.container}>
    <NavBar />
    <div className={styles.main}>
      <h1 className={cx(["heading-primary", styles.title])}>
        Why be a<br />
        SuperDev?
      </h1>
    </div>
  </header>
);

export default Header;
