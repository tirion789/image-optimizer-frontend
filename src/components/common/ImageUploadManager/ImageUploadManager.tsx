import { useState } from 'react';
import { Button, ConvertToList, ImagesList, ImageUploader, InputRange, Loader } from 'components';
import { optimizedImages } from 'api/optimized-images';
import { useChangeImage } from 'hooks/useChangeImage';
import { MAX_QUALITY_PERCENTAGE, MIN_QUALITY_PERCENTAGE } from 'constants/utils';

import styles from './ImageUploadManager.module.scss';
export const ImageUploadManager = () => {
  const [initialFiles, setInitialFiles] = useState<FileList | null>(null);
  const [isLoadingRequest, setIsLoadingRequest] = useState(false);

  const {
    handleChangeRange,
    handleSetActiveFormat,
    handleSetOptimizedImages,
    optimizedFiles,
    qualityPercentage,
    currentFormat,
  } = useChangeImage();

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
        isDisabled={isLoadingRequest}
        currentFormat={currentFormat}
        setActiveConvertFormat={handleSetActiveFormat}
      />
      <ImageUploader
        handleSetOptimizedImages={handleSetOptimizedImages}
        setInitialFiles={setInitialFiles}
      />
      {isLoadingRequest ? (
        <Loader className={styles.loader} />
      ) : (
        <ImagesList
          className={styles.image_list}
          images={optimizedFiles.length ? optimizedFiles : initialFiles}
        />
      )}
      <Button
        isDisabled={!initialFiles?.length || isLoadingRequest}
        version="default"
        className={styles.button}
        onClick={() =>
          optimizedImages(
            initialFiles,
            qualityPercentage,
            currentFormat,
            handleSetOptimizedImages,
            setIsLoadingRequest
          )
        }
      >
        {isLoadingRequest ? 'Файлы оптимизируются' : 'Оптимизировать все файлы'}
      </Button>
    </div>
  );
};
