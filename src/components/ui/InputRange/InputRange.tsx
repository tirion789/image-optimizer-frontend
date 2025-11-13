import { memo } from 'react';

import { InputRangeProps } from './InputRange.props';
import styles from './InputRange.module.scss';

export const InputRange = memo(({ max, min, inputId, onChange, value }: InputRangeProps) => {
  return (
    <label className={styles.label} htmlFor={inputId}>
      Процент от качества: <output className={styles.quality_value}>{value}%</output>
      <input id={inputId} type="range" max={max} min={min} value={value} onChange={onChange} />
    </label>
  );
});
