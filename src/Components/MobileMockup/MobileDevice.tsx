import React from "react";

// Styling
import cx from "classnames";
import { motion, MotionValue } from "framer-motion";
import styles from "./MobileDevice.module.scss";

// Images
import PhoneSvg from "./images/phone.svg";
import TicketSvg from "./images/ticket.svg";
import NavigationSvg from "./images/navigation-bar.svg";

interface Props {
  extraClasses?: string;
  yProgress?: MotionValue<number>;
}

const MobileDevice: React.FC<Props> = ({ extraClasses, yProgress }) => (
  <motion.div className={cx([styles.container, extraClasses || null])}>
    <motion.div style={{ translateY: yProgress }} className={styles.phoneContainer}>
      <img src={NavigationSvg} alt="SuperDev App" className={styles.phoneContainer__navigation} />
      <img src={TicketSvg} alt="SuperDev App" className={styles.phoneContainer__ticket} />
      <img src={PhoneSvg} alt="SuperDev App" className={styles.phoneContainer__phone} />
    </motion.div>
  </motion.div>
);

export default MobileDevice;
