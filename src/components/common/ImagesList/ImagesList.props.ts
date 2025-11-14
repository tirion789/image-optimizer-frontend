export type OptimizedImagesType = {
  originalName: string;
  optimizedData: string;
  optimizedName: string;
};

export interface ImagesListProps {
  images: FileList | Array<OptimizedImagesType>;
  className: string;
}
