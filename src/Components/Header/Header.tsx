import React from "react";

// Styling
import cx from "classnames";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";
import { mainVarient, contentVarient, paragraphVarient } from "./Header.varients";

// Components
import NavBar from "../NavBar/NavBar";
import Buttons from "../Buttons/Buttons";

const Header: React.FC = () => (
  <header className={styles.container}>
    <NavBar />
    <motion.div className={styles.main} variants={mainVarient} initial="initial" animate="animate">
      <h1 className={cx(["heading-primary", styles.title])}>
        Why be a<br />
        SuperDev?
      </h1>
      <motion.div className={styles.content} variants={contentVarient}>
        <motion.p className={styles.paragraph} variants={paragraphVarient}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur deserunt a accusamus voluptates commodi
          iusto sed laborum rem assumenda nulla illo iure, unde error? Consequatur natus expedita delectus. Sunt, est.
        </motion.p>
        <motion.p className={styles.paragraph} variants={paragraphVarient}>
          Eos explicabo sunt asperiores sed maxime obcaecati quos. Quibusdam eligendi consequuntur recusandae, vero qui
          impedit similique culpa non nam repellat voluptatem ad!
        </motion.p>
        <motion.p className={styles.paragraph} variants={paragraphVarient}>
          Eum sapiente eaque culpa atque eius tempora cupiditate quae vel, magni, quidem reiciendis perferendis ut,
          voluptatum commodi minima expedita asperiores iure labore!
        </motion.p>
        <motion.div variants={paragraphVarient}>
          <Buttons invert extraClass={styles.button}>
            Try it out
          </Buttons>
        </motion.div>
      </motion.div>
    </motion.div>
  </header>
);

export default Header;
