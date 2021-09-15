import React from "react";

// Styling
import cx from "classnames";
import styles from "./Buttons.module.scss";

interface Props {
  invert?: boolean;
  extraClass?: string;
  children: React.ReactNode;
}

const Buttons: React.FC<Props> = ({ children, invert, extraClass }) => (
  <div className={cx([invert ? styles.inverted : styles.container, extraClass || null])}>
    <div>{children}</div>
  </div>
);

export default Buttons;
