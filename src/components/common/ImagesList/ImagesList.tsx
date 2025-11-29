import { memo } from 'react';
import { Button } from 'components/ui/Button';
import classNames from 'classnames';
import { formatFileSize } from 'helpers/formats';
import { useModal } from 'hooks/useModal';

import styles from './ImagesList.module.scss';
import { ImagesListProps } from './ImagesList.props';

export const ImagesList = memo(({ images, className }: ImagesListProps) => {
  const { openModal } = useModal();
  if (!images) {
    return;
  }

  const handleOpenModal = (src: string, alt: string) => {
    openModal({ type: 'ImageModal', props: { src, alt } });
  };

  const isFileList = images instanceof FileList;
  const currentArray = isFileList ? Array.from(images) : images;
  const listClassnames = classNames(styles.list, className);

  return (
    <ul className={listClassnames}>
      {currentArray.map((file, index) => {
        const isFile = file instanceof File;
        const src = isFile ? URL.createObjectURL(file) : file.optimizedData;
        const alt = `${isFile ? file.name : file.originalName}-image`;
        return (
          <li
            key={`${isFile ? `${file.name}-${index}` : `${file.optimizedData}-${index}`}`}
            className={styles.item}
          >
            <button onClick={() => handleOpenModal(src, alt)} className={styles.image_button}>
              <img
                className={styles.image}
                src={src}
                alt={`${isFile ? file.name : file.originalName}-image`}
              />
            </button>
            {!isFile && (
              <div>
                <p className={styles.size}>
                  {formatFileSize(file.prevSize)} to {formatFileSize(file.size)}
                </p>
                <p className={styles.size}>
                  из {file.prevFormat} в {file.format}
                </p>
              </div>
            )}

            {!isFile && (
              <Button
                href={file.optimizedData}
                version="default"
                tag="a"
                className={styles.download}
                download={file.optimizedName}
              >
                Скачать изображение
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
});
