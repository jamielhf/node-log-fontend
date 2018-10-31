import styles from './index.css';
import * as React from 'react';
import Link from 'umi/link';

export default function() {
  return (
    <div className={styles.normal}>
    <Link to="/login">Go to list page</Link>
    </div>
  );
}
