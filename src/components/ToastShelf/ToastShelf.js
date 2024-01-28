import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toastCollection, onRemoveToast}) {
  return (
    <ol className={styles.wrapper}>
      {toastCollection.map(({id, variant, message}) =>(
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} message={message} onClose={() => onRemoveToast(id)} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
