import { useEffect, useContext } from "react"
import { ToastContext } from '../components/ToastProvider';

export const useEscapeKey = () => {
  const { removeAllToast } = useContext(ToastContext);

  const handleEscKeydown = (e) => {
    if (e.key === 'Escape') {
      removeAllToast();
    }
  }
  
  useEffect(() => {
    document.addEventListener('keydown', handleEscKeydown);

    return () => {
     document.removeEventListener('keydown', handleEscKeydown);
    }
  }, []);
};
