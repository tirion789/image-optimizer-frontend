import ReactDOM from 'react-dom';
import { ImageModal } from 'components/common/Modals/ImageModal/ImageModal';
import { useModal } from 'hooks/useModal';
import { LoginModal } from 'components/common/Modals/LoginModal/LoginModal';
import { useKeyPress } from 'hooks/useKeyPress';

import styles from './Modal.module.scss';

export const Modal = () => {
  const { modalConfig, closeModal } = useModal();
  useKeyPress(closeModal, 'Escape');

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
    <div role="button" onClick={closeModal} className={styles.overlay}>
      <div className={styles.content}>{renderModal()}</div>
    </div>,
    document.body
  );
};
