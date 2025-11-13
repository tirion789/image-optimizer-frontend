import classNames from 'classnames';

import styles from './Button.module.scss';
import { ButtonCommonProps } from './Button.props';

export const Button = ({
  onClick,
  children,
  isDisabled = false,
  className,
  version,
  isActive,
}: ButtonCommonProps) => {
  const buttonClassName = classNames(
    styles.button,
    styles[version],
    isActive && styles.active,
    className
  );

  return (
    <button disabled={isDisabled} onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};
