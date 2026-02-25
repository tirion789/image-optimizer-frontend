import ReactDOM from 'react-dom';
import { ImageModal } from 'components/common/Modals/ImageModal/ImageModal';
import { useModal } from 'hooks/useModal';
import { LoginModal } from 'components/common/Modals/LoginModal/LoginModal';
import { useKeyPress } from 'hooks/useKeyPress';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { useRef } from 'react';

import styles from './Modal.module.scss';

export const Modal = () => {
  const { modalConfig, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement | null>(null);
  useKeyPress(closeModal, 'Escape');
  useOutsideClick(modalRef, closeModal);

  if (!modalConfig.type) {
    return null;
  }
  const renderModal = () => {
    switch (modalConfig.type) {
      case 'ImageModal':
        return <ImageModal {...modalConfig.props} />;
      case 'LoginModal':
        return <LoginModal {...modalConfig.props} />;
      default:
        return null;
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div ref={modalRef} className={styles.content}>
        {renderModal()}
      </div>
    </div>,
    document.body
  );
};
