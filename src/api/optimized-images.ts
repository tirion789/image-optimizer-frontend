import axios from 'axios';
import { OptimizedImagesType } from 'components/common/ImagesList/ImagesList.props';
import { API_PATH } from 'constants/api';

export const optimizedImages = async (
  files: FileList | null,
  qualityPercentage: string,
  setOptimizedImages: (data: Array<OptimizedImagesType>) => void
) => {
  if (!files) {
    return;
  }
  const filesArray = Array.from(files);

  const formData = new FormData();

  filesArray.forEach((file) => formData.append('images', file));

  try {
    const { data } = await axios.post(
      `/api/${API_PATH.optimize}?quality=${qualityPercentage}&format=png`,
      formData
    );
    setOptimizedImages(data);
  } catch (error) {
    console.log(error);
  }
};
