import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ModalType } from 'types/modals';

export interface ModalContextType {
  isOpen: boolean;
  modalConfig: ModalType;
  openModal: (value: ModalType) => void;
  closeModal: () => void;
}

const defaultValue = {
  isOpen: false,
  modalConfig: { type: null, props: null },
  openModal: () => {},
  closeModal: () => {},
};

export const ModalContext = createContext<ModalContextType>(defaultValue);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<ModalType>({ type: null, props: null });

  const openModal = (config: ModalType) => {
    setModalConfig(config);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalConfig({ type: null, props: null });
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        modalConfig,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
