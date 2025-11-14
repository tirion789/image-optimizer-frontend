import { ConvertFormats } from 'types/formats';

export interface ConvertToListProps {
  setActiveConvertFormat: (format: ConvertFormats) => void;
  currentFormat: ConvertFormats;
  isDisabled?: boolean;
}
