export type OptimizedImagesType = {
  originalName: string;
  optimizedData: string;
  optimizedName: string;
};

export interface ImagesListProps {
  images: Array<File> | Array<OptimizedImagesType>;
}
