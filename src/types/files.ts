import { ConvertFormats } from './formats';

export type InitialFiles = FileList | null;

export type OptimizedImagesType = {
  originalName: string;
  optimizedData: string;
  optimizedName: string;
  prevFormat: string;
  format: ConvertFormats;
  quality: string;
  prevSize: number;
  size: number;
};
