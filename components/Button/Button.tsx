import cn from 'classnames';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import { ButtonProps } from './Button.props';

function Button({
  children,
  variant,
  className,
  arrow = 'none',
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      {...props}
      className={cn(styles.button, className, {
        [styles.primary]: variant === 'primary',
        [styles.ghost]: variant === 'ghost',
      })}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
}

export default Button;
