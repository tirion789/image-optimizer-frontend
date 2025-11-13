import { ConvertFormats } from 'types/formats';

import { OptimizedImagesType } from '../ImagesList/ImagesList.props';

export interface ConvertToListProps {
  setActiveConvertFormat: (format: ConvertFormats) => void;
  currentFormat: ConvertFormats;
  initialFiles: FileList | null;
}
