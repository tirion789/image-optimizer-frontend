import { memo } from 'react';
import { Button } from 'components/ui/Button';
import classNames from 'classnames';
import { formatFileSize } from 'helpers/formats';

import styles from './ImagesList.module.scss';
import { ImagesListProps } from './ImagesList.props';

export const ImagesList = memo(({ images, className }: ImagesListProps) => {
  if (!images) {
    return;
  }
  const isFileList = images instanceof FileList;
  const currentArray = isFileList ? Array.from(images) : images;
  const listClassnames = classNames(styles.list, className);

  return (
    <ul className={listClassnames}>
      {currentArray.map((file, index) => {
        const isFile = file instanceof File;
        return (
          <li
            key={`${isFile ? `${file.name}-${index}` : `${file.optimizedData}-${index}`}`}
            className={styles.item}
          >
            <img
              className={styles.image}
              src={isFile ? URL.createObjectURL(file) : file.optimizedData}
              alt={`${isFile ? file.name : file.originalName}-image`}
            />
            {!isFile && (
              <div>
                <p className={styles.size}>
                  {formatFileSize(file.prevSize)} to {formatFileSize(file.size)}
                </p>
                <p className={styles.size}></p>
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
