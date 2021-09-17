import React from "react";

// Styling
import cx from "classnames";
import { motion } from "framer-motion";
import styles from "./MobileDevice.module.scss";

// Images
import PhoneSvg from "./images/phone.svg";

interface Props {
  extraClasses?: string;
}

const MobileDevice: React.FC<Props> = ({ extraClasses }) => (
  <motion.div className={cx([styles.container, extraClasses || null])}>
    <div className={styles.phoneContainer}>
      <img src={PhoneSvg} alt="SuperDev App" className={styles.phoneContainer__phone} />
    </div>
  </motion.div>
);

export default MobileDevice;
