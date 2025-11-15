import classNames from 'classnames';

import styles from './Loader.module.scss';
import { LoaderProps } from './Loader.props';

export const Loader = ({ className }: LoaderProps) => {
  const loaderClassname = classNames(styles.loader, className);
  return <span className={loaderClassname}></span>;
};
