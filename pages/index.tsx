import React from 'react';
import styles from './index.css';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <a href="http://localhost:8000">localhost</a>
    </div>
  );
}
