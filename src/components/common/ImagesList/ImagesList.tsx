import { memo } from 'react';

import styles from './ImagesList.module.scss';
import { ImagesListProps } from './ImagesList.props';

export const ImagesList = memo(({ images }: ImagesListProps) => {
  const isFileList = images instanceof FileList;
  const currentArray = isFileList ? Array.from(images) : images;

  return (
    <ul className={styles.list}>
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
              <a href={file.optimizedData} download={file.optimizedName}>
                Скачать изображение
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
});
