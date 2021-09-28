import React from "react";

// Styling
import cx from "classnames";
import { motion } from "framer-motion";
import styles from "./MobileDevice.module.scss";

// Images
import PhoneSvg from "./images/phone.svg";
import TicketSvg from "./images/ticket.svg";
import EmptyTicket from "./images/empty-ticket.svg";
import NavigationSvg from "./images/navigation-bar.svg";

interface Props {
  text?: string;
  subtitle?: string;
  extraClasses?: string;
  stylesTextContainer?: string;
}

const MobileDevice: React.FC<Props> = ({ extraClasses, text, stylesTextContainer, subtitle }) => (
  <motion.div className={cx([styles.container, extraClasses || null])}>
    <div className={cx([styles.text, stylesTextContainer || null])}>
      <h2 className={cx(["heading-secondary", styles.title])}>{text}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      <img src={EmptyTicket} alt="SuperDev App" className={styles.titleHolder} />
    </div>
    <motion.div className={styles.phoneContainer}>
      <img src={NavigationSvg} alt="SuperDev App" className={styles.phoneContainer__navigation} />
      <img src={TicketSvg} alt="SuperDev App" className={styles.phoneContainer__ticket} />
      <img src={PhoneSvg} alt="SuperDev App" className={styles.phoneContainer__phone} />
    </motion.div>
  </motion.div>
);

export default MobileDevice;
