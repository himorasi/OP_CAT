// OP.js
import React from 'react';
import styles from './OP.module.css';

const OP = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.opH1}>What is OP_CAT?</h1>
      <div className={styles.twoByTwoGrid}>
      <div className={styles.gridRow}>
      <div className={styles.gridItem}>Succcess Flow</div>
      <div className={styles.gridItem}>
      <img
         className='animation1' 
         src={require('../../assets/animations/cat1.svg').default}
         type="image/svg+xml"
         aria-label="OP Cat Animation"
        />

      </div>
    </div>
    <div className={styles.gridRow}>
      <div className={styles.gridItem}>
      <img
         className='animation1' 
         src={require('../../assets/animations/cat1.svg').default}
         type="image/svg+xml"
         aria-label="OP Cat Animation"
        />
      </div>
      <div className={styles.gridItem}>Fail Flow 1</div>
    </div>
    <div className={styles.gridRow}>
      <div className={styles.gridItem}>Fail Flow 2</div>
      <div className={styles.gridItem}>
      <img
         className='animation1' 
         src={require('../../assets/animations/cat1.svg').default}
         type="image/svg+xml"
         aria-label="OP Cat Animation"
        />
      </div>
    </div>
  </div>
  </div>
  );
};

export default OP;
