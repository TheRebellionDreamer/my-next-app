import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

function Tag({
  color = 'ghost',
  size = 'small',
  href,
  children,
  className,
  ...props
}: TagProps): JSX.Element {
  return (
    <div
      {...props}
      className={cn(styles.tag, className, {
        [styles.ghost]: color === 'ghost',
        [styles.gray]: color === 'gray',
        [styles.green]: color === 'green',
        [styles.red]: color === 'red',
        [styles.primary]: color === 'primary',
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
      })}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
}

export default Tag;
