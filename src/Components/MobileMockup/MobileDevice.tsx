import React from "react";

// Styling
import cx from "classnames";
import { motion } from "framer-motion";
import styles from "./MobileDevice.module.scss";

// Images
import PhoneSvg from "./images/phone.svg";
import TicketSvg from "./images/ticket.svg";
import NavigationSvg from "./images/navigation-bar.svg";

interface Props {
  text?: string;
  extraClasses?: string;
  stylesTextContainer?: string;
}

const MobileDevice: React.FC<Props> = ({ extraClasses, text, stylesTextContainer }) => (
  <motion.div className={cx([styles.container, extraClasses || null])}>
    <div className={cx([styles.text, stylesTextContainer])}>
      <h2 className={styles.title}>{text}</h2>
    </div>
    <motion.div className={styles.phoneContainer}>
      <img src={NavigationSvg} alt="SuperDev App" className={styles.phoneContainer__navigation} />
      <img src={TicketSvg} alt="SuperDev App" className={styles.phoneContainer__ticket} />
      <img src={PhoneSvg} alt="SuperDev App" className={styles.phoneContainer__phone} />
    </motion.div>
  </motion.div>
);

export default MobileDevice;
