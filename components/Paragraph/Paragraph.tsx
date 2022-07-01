import { ParagraphProps } from './Paragraph.props';
import cx from 'classnames';
import styles from './Paragraph.module.css';

function Paragraph({ variant = 'standard', className, ...props }: ParagraphProps): JSX.Element {
  return (
    <p
      {...props}
      className={cx(styles.paragraph, className, {
        [styles.small]: variant === 'small',
        [styles.standard]: variant === 'standard',
        [styles.large]: variant === 'large',
      })}
    ></p>
  );
}

export default Paragraph;
