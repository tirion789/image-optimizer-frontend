import { ReactNode, SyntheticEvent } from 'react';

export interface ButtonCommonProps {
  isDisabled?: boolean;
  className?: string;
  children: ReactNode;
  onClick: (event: SyntheticEvent) => void;
  version: 'default' | 'helper';
  isActive?: boolean;
}
