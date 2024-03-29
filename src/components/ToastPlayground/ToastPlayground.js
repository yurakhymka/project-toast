import React, { useState, useContext } from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';
import { useEscapeKey } from '../../hooks/hooks';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = useState('');
  const [notice, setNotice] = useState(VARIANT_OPTIONS[0]);
  const { addToast, removeAllToast } = useContext(ToastContext);

  useEscapeKey();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (message.trim().length) {
      addToast({
        message: message,
        notice: notice,
      });
      resetState();
    }
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }
  
  const handleVariantChange = (e) => {
    setNotice(e.target.value);
  };

  const resetState = () => {
    setNotice(VARIANT_OPTIONS[0]);
    setMessage('');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf/>
      <form onSubmit={handleFormSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={handleMessageChange} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(option => (
              <label key={option} htmlFor={`variant-notice-${option}`}>
                <input
                  id={`variant-notice-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === notice}
                  onChange={handleVariantChange}
                />
                {option}
            </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default React.memo(ToastPlayground);
