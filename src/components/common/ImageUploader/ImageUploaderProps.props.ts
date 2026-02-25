import { Dispatch, SetStateAction } from 'react';
import { OptimizedImagesType } from 'types/files';

export interface ImageUploaderProps {
  setInitialFiles: Dispatch<SetStateAction<FileList | null>>;
  handleSetOptimizedImages: (files: Array<OptimizedImagesType>) => void;
}
