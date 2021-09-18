import React from "react";

// Styling
import cx from "classnames";
import { motion } from "framer-motion";
import styles from "./WhatIsIt.module.scss";

// Components
import MobileDevice from "../../../Components/MobileMockup/MobileDevice";

interface Props {
  inView: boolean;
  extraClasses?: string;
}

const WhatIsIt = React.forwardRef<HTMLDivElement, Props>(({ extraClasses }, observerRef) => (
  // const { scrollYProgress } = useViewportScroll();
  // const yProgress = useTransform(scrollYProgress, [0, 1], [0, 2000]);

  <motion.div ref={observerRef} className={cx([styles.container, extraClasses || null])}>
    <div className={styles.text}>
      <h2 className={cx(["heading-secondary", styles.title])}>What is it</h2>
      <p>
        SuperDev is a product that you have been waiting for all this time, and here is everything you need to know.
      </p>
    </div>
    <div className={styles.main}>
      <MobileDevice extraClasses={styles.mobileDevice} />
    </div>
  </motion.div>
));

WhatIsIt.displayName = "WhatIsIt";

export default WhatIsIt;
