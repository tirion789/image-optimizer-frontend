import classNames from 'classnames';
import { ChangeEvent, DragEvent } from 'react';

import styles from './ImageIUploader.module.scss';
import { ImageUploaderProps } from './ImageUploaderProps.props';

export const ImageUploader = ({ setInitialFiles }: ImageUploaderProps) => {
  const labelFileLoaderClassNames = classNames(styles.dropzone);

  const handleChangeInputFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setInitialFiles(files);
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setInitialFiles(files);
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  const handleDragEnter = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  return (
    <label
      onDrop={(event) => handleDrop(event)}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      className={labelFileLoaderClassNames}
      htmlFor="fileUploader"
    >
      <span className={styles.dropzone_text}>Перетащите ваши файлы сюда, либо кликните</span>
      <input
        id="fileUploader"
        className={styles.input}
        type="file"
        onChange={(event) => handleChangeInputFiles(event)}
        onClick={(event) => event.stopPropagation()}
        multiple
        accept="image/*"
      />
    </label>
  );
};
