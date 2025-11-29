import { ImageModalProps } from 'types/modals';

import styles from './ImageModal.module.scss';

export const ImageModal = ({ src, alt }: ImageModalProps) => {
  return <img className={styles.image} src={src} alt={alt} />;
};
