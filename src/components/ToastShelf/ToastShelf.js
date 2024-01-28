import React, { useContext } from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastCollection } = useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toastCollection.map(({id, variant, message}) =>(
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant} message={message} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
