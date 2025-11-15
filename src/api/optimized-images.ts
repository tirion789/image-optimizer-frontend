import axios from 'axios';
import { API_PATH } from 'constants/api';
import { Dispatch, SetStateAction } from 'react';
import { OptimizedImagesType } from 'types/files';

export const optimizedImages = async (
  files: FileList | null,
  qualityPercentage: string,
  format: string,
  setOptimizedImages: (data: Array<OptimizedImagesType>) => void,
  setIsLoadingRequest: Dispatch<SetStateAction<boolean>>
) => {
  if (!files) {
    return;
  }
  setIsLoadingRequest(true);
  const filesArray = Array.from(files);

  const formData = new FormData();

  filesArray.forEach((file) => formData.append('images', file));

  try {
    const { data } = await axios.post(
      `/api/${API_PATH.optimize}?quality=${qualityPercentage}&format=${format}`,
      formData
    );
    setOptimizedImages(data);
  } catch (error) {
    console.log(error);
  } finally {
    // чтобы не так быстро пропадал лоадер
    setTimeout(() => setIsLoadingRequest(false), 500);
  }
};
