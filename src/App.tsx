import React from "react";
import Header from "./PageComponents/Landing/Header/Header";

// Styling
import styles from "./Styles/App.module.scss";

const App: React.FC = () => (
  <main className={styles.container}>
    <Header />
  </main>
);

export default App;
