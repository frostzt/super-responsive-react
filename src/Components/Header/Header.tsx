import React from "react";

// Styling
import cx from "classnames";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";

// Components
import NavBar from "../NavBar/NavBar";
import Buttons from "../Buttons/Buttons";

const Header: React.FC = () => (
  <header className={styles.container}>
    <NavBar />
    <motion.div className={styles.main}>
      <motion.h1 className={cx(["heading-primary", styles.title])}>
        Why be a<br />
        SuperDev?
      </motion.h1>
      <motion.div className={styles.content}>
        <motion.p className={styles.paragraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur deserunt a accusamus voluptates commodi
          iusto sed laborum rem assumenda nulla illo iure, unde error? Consequatur natus expedita delectus. Sunt, est.
        </motion.p>
        <motion.p className={styles.paragraph}>
          Eos explicabo sunt asperiores sed maxime obcaecati quos. Quibusdam eligendi consequuntur recusandae, vero qui
          impedit similique culpa non nam repellat voluptatem ad!
        </motion.p>
        <motion.p className={styles.paragraph}>
          Eum sapiente eaque culpa atque eius tempora cupiditate quae vel, magni, quidem reiciendis perferendis ut,
          voluptatum commodi minima expedita asperiores iure labore!
        </motion.p>
      </motion.div>
      <motion.div>
        <Buttons invert extraClass={styles.button}>
          Try it out
        </Buttons>
      </motion.div>
    </motion.div>
  </header>
);

export default Header;
