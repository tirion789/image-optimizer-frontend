import classNames from 'classnames';
import { ChangeEvent, DragEvent, memo, useRef } from 'react';
import { useKeyPress } from 'hooks/useKeyPress';
import { acceptUploadFormats } from 'constants/convert';

import { ReactComponent as LoadIcon } from '../../../assets/images/svg/load.svg';
import styles from './ImageIUploader.module.scss';
import { ImageUploaderProps } from './ImageUploaderProps.props';

const allowedTypes = new Set([
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/svg+xml',
  'image/webp',
  'image/avif',
]);

export const ImageUploader = memo(
  ({ setInitialFiles, handleSetOptimizedImages }: ImageUploaderProps) => {
    const labelFileLoaderClassNames = classNames(styles.dropzone);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const fileLabelRef = useRef<HTMLLabelElement>(null);

    const handleChangeInputFiles = (event: ChangeEvent<HTMLInputElement>) => {
      handleSetOptimizedImages([]);
      const files = event.target.files;
      setInitialFiles(files);
    };

    const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      const filesArray = Array.from(files);
      const containsAnInvalidFiles = filesArray.some(({ type }) => !allowedTypes.has(type));

      if (containsAnInvalidFiles) {
        return;
      }

      setInitialFiles(files);
    };

    const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
      event.preventDefault();
    };

    const handleDragEnter = (event: DragEvent<HTMLLabelElement>) => {
      event.preventDefault();
    };

    const handleClickInput = () => {
      if (document.activeElement === fileLabelRef.current) {
        fileInputRef.current?.click();
      }
    };

    useKeyPress(handleClickInput, 'Enter');

    return (
      <label
        ref={fileLabelRef}
        onDrop={(event) => handleDrop(event)}
        tabIndex={0}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        className={labelFileLoaderClassNames}
        htmlFor="fileUploader"
      >
        <div className={styles.dropzone_text}>
          <span>Перетащите ваши файлы сюда, либо кликните</span>
          <LoadIcon className={styles.icon} />
        </div>
        <input
          ref={fileInputRef}
          tabIndex={-1}
          id="fileUploader"
          className={styles.input}
          type="file"
          onChange={(event) => handleChangeInputFiles(event)}
          onClick={(event) => event.stopPropagation()}
          multiple
          accept={acceptUploadFormats}
        />
      </label>
    );
  }
);
