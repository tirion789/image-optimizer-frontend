import styles from './ImagesList.module.scss';
import { ImagesListProps } from './ImagesList.props';

export const ImagesList = ({ images }: ImagesListProps) => {
  return (
    <ul className={styles.list}>
      {images.map((file, index) => {
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
};
