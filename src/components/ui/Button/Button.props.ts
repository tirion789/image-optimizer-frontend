import { ReactNode, SyntheticEvent } from 'react';

interface ButtonCommonProps {
  isDisabled?: boolean;
  className?: string;

  version: 'default' | 'helper';
  isActive?: boolean;
}

interface ButtonTagProps extends ButtonCommonProps {
  children: ReactNode;
  href?: never;
  tag?: 'button';
  download?: never;
  onClick: (event: SyntheticEvent) => void;
}

interface ButtonLinkTagProps extends ButtonCommonProps {
  children: ReactNode;
  href: string;
  download?: string;
  onClick?: (event: SyntheticEvent) => void;
  tag: 'a';
}

export type ButtonProps = ButtonLinkTagProps | ButtonTagProps;
