import React from 'react';
// @ts-nocheck
import styles from './index.css';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      Email: 
      <a className={styles.email} href="mailto:vintotsai@gmail.com">vintotsai@gmail.com</a>
    </div>
  );
}
