import React from "react";

import styles from "../styles/BlurBgAnimation.module.css";

const BlurBgAnimation = () => {
  return (
    <div className={styles.mainContainer}>
      <h2>Blur Background Animation</h2>
      <div className={styles.contentContainer}>
        <div className={styles.animationContainer}>
          <div className={styles.firstShape}></div>
          <div className={styles.secondShape}></div>
          <div className={styles.thirdShape}></div>
        </div>
        <div className={styles.containerFront}>
            HERE IT IS
        </div>
      </div>
    </div>
  );
};

export default BlurBgAnimation;
