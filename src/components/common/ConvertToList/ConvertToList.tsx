import { formats } from 'constants/convert';
import { Button } from 'components';
import { memo } from 'react';

import styles from './ConvertToList.module.scss';
import { ConvertToListProps } from './ConvertToList.props';

// const ICO_FORMAT = 'image/x-icon';

export const ConvertToList = memo(
  ({ setActiveConvertFormat, currentFormat, initialFiles }: ConvertToListProps) => {
    // const isCurrentAndConvertFormatIco = (format: ConvertFormats) => {
    //   if (initialFiles) {
    //     const filesArray = Array.from(initialFiles);
    //     const typesArray = filesArray.map(({ type }) => type);
    //     if (typesArray.includes(ICO_FORMAT) && format === 'ico') {
    //       return true;
    //     }

    //     return false;
    //   }
    // };

    return (
      <ul className={styles.list}>
        {formats.map((format, index) => (
          <li key={`${format}-${index}`} className={styles.item}>
            <Button
              isActive={currentFormat === format}
              version="helper"
              //   isDisabled={isCurrentAndConvertFormatIco(format)}
              onClick={() => setActiveConvertFormat(format)}
            >
              Convet to {format}
            </Button>
          </li>
        ))}
      </ul>
    );
  }
);
