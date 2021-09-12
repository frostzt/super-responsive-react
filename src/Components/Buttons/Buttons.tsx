import React from "react";
import PropsTypes from "prop-types";

// Styling
import cx from "classnames";
import styles from "./Buttons.module.scss";

interface Props {
  invert?: boolean;
  children: React.ReactNode;
}

const Buttons: React.FC<Props> = ({ children, invert }) => (
  <div className={cx([styles.container, invert ? styles.inverted : null])}>
    <div>{children}</div>
  </div>
);

// Prop Validation
Buttons.defaultProps = {
  invert: false,
  children: "",
};

Buttons.propTypes = {
  invert: PropsTypes.bool,
  children: PropsTypes.node,
};

export default Buttons;
