import classNames from 'classnames';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = ({
  onClick,
  children,
  isDisabled = false,
  className,
  version,
  tag = 'button',
  isActive,
  href,
  download,
}: ButtonProps) => {
  const buttonClassName = classNames(
    styles.button,
    styles[version],
    isActive && styles.active,
    className
  );

  return tag === 'button' ? (
    <button disabled={isDisabled} onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  ) : (
    <a download={download} onClick={onClick} className={buttonClassName} href={href}>
      {children}
    </a>
  );
};
