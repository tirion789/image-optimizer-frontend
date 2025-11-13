import { ChangeEvent, useMemo, useState } from 'react';
import { ImagesList, ImageUploader } from 'components';
import { optimizedImages } from 'api/optimized-images';
import { InputRange } from 'components/ui/InputRange/InputRange';

import styles from './ImageUploadManager.module.scss';
import { OptimizedImagesType } from '../ImagesList/ImagesList.props';

const MAX_QUALITY_PERCENTAGE = '100';
const MIN_QUALITY_PERCENTAGE = '1';

export const ImageUploadManager = () => {
  const [initialFiles, setInitialFiles] = useState<FileList | null>(null);
  const [optimizedFiles, setOptimizedFiles] = useState<Array<OptimizedImagesType>>([]);
  const [qualityPercentage, setQualityPercentage] = useState(MAX_QUALITY_PERCENTAGE);

  const handleOptimizedImages = (optimizedImages: Array<OptimizedImagesType>) => {
    setOptimizedFiles(optimizedImages);
  };

  const handleChangeRange = (event: ChangeEvent<HTMLInputElement>) => {
    const range = event.target.value;
    setQualityPercentage(range);
  };

  return (
    <div className={styles.content}>
      <InputRange
        max={MAX_QUALITY_PERCENTAGE}
        min={MIN_QUALITY_PERCENTAGE}
        value={qualityPercentage}
        onChange={handleChangeRange}
        inputId={'qualityRange'}
      />
      <ImageUploader setInitialFiles={setInitialFiles} />

      {initialFiles && (
        <ImagesList images={optimizedFiles.length ? optimizedFiles : initialFiles} />
      )}
      <button
        onClick={() => optimizedImages(initialFiles, qualityPercentage, handleOptimizedImages)}
      >
        Оптимизировать все файлы
      </button>
    </div>
  );
};
