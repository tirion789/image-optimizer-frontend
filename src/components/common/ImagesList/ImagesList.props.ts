import { InitialFiles, OptimizedImagesType } from 'types/files';

export interface ImagesListProps {
  images: InitialFiles | Array<OptimizedImagesType>;
  className: string;
}
