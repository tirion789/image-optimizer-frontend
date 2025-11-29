import { formats } from 'constants/convert';
import { Button } from 'components';
import { memo } from 'react';

import styles from './ConvertToList.module.scss';
import { ConvertToListProps } from './ConvertToList.props';

// const ICO_FORMAT = 'image/x-icon';

export const ConvertToList = memo(
  ({ setActiveConvertFormat, currentFormat, isDisabled }: ConvertToListProps) => {
    return (
      <ul className={styles.list}>
        {formats.map((format, index) => (
          <li key={`${format}-${index}`} className={styles.item}>
            <Button
              isActive={currentFormat === format}
              version="helper"
              isDisabled={isDisabled}
              onClick={() => setActiveConvertFormat(format)}
            >
              Перевести в {format}
            </Button>
          </li>
        ))}
      </ul>
    );
  }
);
