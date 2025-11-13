import { useState } from 'react';
import { ImagesList, ImageUploader } from 'components';
import { optimizedImages } from 'api/optimized-images';

import styles from './ImageUploadManager.module.scss';
import { OptimizedImagesType } from '../ImagesList/ImagesList.props';

export const ImageUploadManager = () => {
  const [initialFiles, setInitialFiles] = useState<FileList | null>(null);
  const [optimizedFiles, setOptimizedFiles] = useState<Array<OptimizedImagesType>>([]);
  const [value, setValue] = useState('100');

  const handleOptimizedImages = (optimizedImages: Array<OptimizedImagesType>) => {
    setOptimizedFiles(optimizedImages);
  };

  return (
    <div className={styles.content}>
      <ImageUploader setInitialFiles={setInitialFiles} />
      <label htmlFor="qualityRange">
        Качество: <output className="quality-value">{value}%</output>
        <input
          id="qualityRange"
          type="range"
          max={100}
          min={1}
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
      </label>
      {initialFiles && (
        <ImagesList images={optimizedFiles.length ? optimizedFiles : Array.from(initialFiles)} />
      )}
      <button onClick={() => optimizedImages(initialFiles, handleOptimizedImages)}>
        Оптимизировать все файлы
      </button>
    </div>
  );
};
