import { HtagProps } from './Header.props';
import styles from './Htag.module.css';

function Htag({ tag, children }: HtagProps): JSX.Element {
  switch (tag) {
    case 'h1':
      return <h1 className={styles.h1}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.header}>{children}</h2>;
    case 'h3':
      return <h3 className={styles.header}>{children}</h3>;
    default:
      return <></>;
  }
}

export default Htag;
