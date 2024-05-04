import React from 'react';
import styles from './Modal.module.css';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

function Modal({ children }) {
  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.modalWrapper}>
          <div className={styles.backdrop}></div>
          <div className={styles.dialog}>{children}</div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Modal;
