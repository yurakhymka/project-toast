import React, { useCallback, useState } from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toastCollection, setToastCollection] = useState([]);

  const addToast = ({message, notice}) => {
    const copyToastCollection = structuredClone(toastCollection);
    const toast = {
      message: message,
      variant: notice,
      id: crypto.randomUUID(),
    }

    copyToastCollection.push(toast);
    setToastCollection(copyToastCollection);
  };


  const removeToast = (id) => {
    const copyToastCollection = structuredClone(toastCollection);
    const filteredCollection = copyToastCollection.filter(item => item.id !== id);
    
    setToastCollection(filteredCollection);
  };

  const removeAllToast = () => {
    setToastCollection([]);
  };

  return <ToastContext.Provider 
    value={{ toastCollection, addToast, removeToast, removeAllToast }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
