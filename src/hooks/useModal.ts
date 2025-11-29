import { ModalContext, ModalContextType } from 'contexts/ModalContext';
import { useContext } from 'react';

export const useModal = () => {
  const { openModal, closeModal, modalConfig } = useContext<ModalContextType>(ModalContext);

  return { openModal, closeModal, modalConfig };
};
