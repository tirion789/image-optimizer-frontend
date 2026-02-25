import { DEFAULT_FORMAT, MAX_QUALITY_PERCENTAGE } from 'constants/utils';
import { ChangeEvent, useCallback, useState } from 'react';
import { OptimizedImagesType } from 'types/files';
import { ConvertFormats } from 'types/formats';

export const useChangeImage = () => {
  const [optimizedFiles, setOptimizedFiles] = useState<Array<OptimizedImagesType>>([]);
  const [qualityPercentage, setQualityPercentage] = useState(MAX_QUALITY_PERCENTAGE);
  const [currentFormat, setCurrentFormat] = useState<ConvertFormats>(DEFAULT_FORMAT);

  const handleSetOptimizedImages = useCallback((optimizedImages: Array<OptimizedImagesType>) => {
    setOptimizedFiles(optimizedImages);
  }, []);

  const handleChangeRange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const range = event.target.value;
    setQualityPercentage(range);
  }, []);

  const handleSetActiveFormat = useCallback((format: ConvertFormats) => {
    setCurrentFormat(format);
  }, []);

  return {
    handleChangeRange,
    handleSetActiveFormat,
    handleSetOptimizedImages,
    optimizedFiles,
    qualityPercentage,
    currentFormat,
  };
};
