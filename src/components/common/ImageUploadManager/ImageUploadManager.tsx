import { ChangeEvent, useCallback, useState } from 'react';
import { Button, ConvertToList, ImagesList, ImageUploader, InputRange } from 'components';
import { optimizedImages } from 'api/optimized-images';
import { ConvertFormats } from 'types/formats';

import styles from './ImageUploadManager.module.scss';
import { OptimizedImagesType } from '../ImagesList/ImagesList.props';

const MAX_QUALITY_PERCENTAGE = '100';
const MIN_QUALITY_PERCENTAGE = '1';
const DEFAULT_FORMAT = 'png';

export const ImageUploadManager = () => {
  const [initialFiles, setInitialFiles] = useState<FileList | null>(null);
  const [optimizedFiles, setOptimizedFiles] = useState<Array<OptimizedImagesType>>([]);
  const [qualityPercentage, setQualityPercentage] = useState(MAX_QUALITY_PERCENTAGE);
  const [currentFormat, setCurrentFormat] = useState<ConvertFormats>(DEFAULT_FORMAT);

  const handleOptimizedImages = (optimizedImages: Array<OptimizedImagesType>) => {
    setOptimizedFiles(optimizedImages);
  };

  const handleChangeRange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const range = event.target.value;
    setQualityPercentage(range);
  }, []);

  const handleSetActiveFormat = useCallback((format: ConvertFormats) => {
    setCurrentFormat(format);
  }, []);

  return (
    <div className={styles.content}>
      <InputRange
        max={MAX_QUALITY_PERCENTAGE}
        min={MIN_QUALITY_PERCENTAGE}
        value={qualityPercentage}
        onChange={handleChangeRange}
        inputId={'qualityRange'}
      />
      <ConvertToList
        initialFiles={initialFiles}
        currentFormat={currentFormat}
        setActiveConvertFormat={handleSetActiveFormat}
      />
      <ImageUploader setInitialFiles={setInitialFiles} />

      {initialFiles && (
        <ImagesList images={optimizedFiles.length ? optimizedFiles : initialFiles} />
      )}
      <Button
        isDisabled={!initialFiles?.length}
        version="default"
        className={styles.button}
        onClick={() =>
          optimizedImages(initialFiles, qualityPercentage, currentFormat, handleOptimizedImages)
        }
      >
        Оптимизировать все файлы
      </Button>
    </div>
  );
};
