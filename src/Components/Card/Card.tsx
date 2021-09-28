import React from "react";

// Styling
import styles from "./Card.module.scss";

interface Props {
  width?: string;
  height?: string;
}

const Card: React.FC<Props> = () => (
  <div className={styles.container}>
    <div className={styles.wrapper} />
  </div>
);

export default Card;
