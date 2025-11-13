import { ChangeEvent } from 'react';

export interface InputRangeProps {
  max: string;
  min: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputId: string;
}
