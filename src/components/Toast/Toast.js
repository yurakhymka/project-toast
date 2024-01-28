import React, { useContext } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import { ToastContext } from '../ToastProvider';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, message, variant }) {
  const Icontag = ICONS_BY_VARIANT[variant];
  const { removeToast } = useContext(ToastContext);

  const handleCloseButton = () => {
    console.log()
    removeToast(id);
  }
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icontag size={24} />
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button className={styles.closeButton}>
        <X size={24} onClick={handleCloseButton}/>
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
