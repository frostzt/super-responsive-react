import React from "react";

// Styling
import styles from "./App.module.scss";

const App: React.FC = () => {
  console.log("This is great");

  return (
    <div className={styles.container}>
      <div />
    </div>
  );
};

export default App;
