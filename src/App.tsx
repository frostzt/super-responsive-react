import React from "react";
import { useInView } from "react-intersection-observer";

// Page Components
import Header from "./PageComponents/Landing/Header/Header";
import WhatIsIt from "./PageComponents/Landing/WhatIsIt/WhatIsIt";

// Styling
import styles from "./Styles/App.module.scss";

const App: React.FC = () => {
  const [whatIsItRef, whatIsItInView] = useInView({ threshold: 0.3 });

  return (
    <main className={styles.container}>
      <Header extraClasses={styles.header} />
      <WhatIsIt ref={whatIsItRef} inView={whatIsItInView} />
    </main>
  );
};

export default App;
