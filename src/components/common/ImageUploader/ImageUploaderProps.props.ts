import { Dispatch, SetStateAction } from 'react';

export interface ImageUploaderProps {
  setInitialFiles: Dispatch<SetStateAction<FileList | null>>;
}
