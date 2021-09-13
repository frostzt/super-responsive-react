import React from "react";

// Styling
import { motion } from "framer-motion";
import styles from "./NavBar.module.scss";
import { containerVarient, childrenVarient } from "./NavBar.varients";

// Components
import Buttons from "../Buttons/Buttons";

const NavBar: React.FC = () => (
  <motion.div variants={containerVarient} initial="initial" animate="animate" className={styles.container}>
    <motion.div variants={childrenVarient} className={styles.logo}>
      SuperDev
    </motion.div>
    <motion.div variants={childrenVarient} className={styles.buttons}>
      <Buttons invert>Login</Buttons>
      <Buttons>Register</Buttons>
    </motion.div>
  </motion.div>
);

export default NavBar;
