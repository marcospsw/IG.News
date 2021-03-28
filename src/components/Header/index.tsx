import { SigninButton } from '../SigninButton';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="/">
          <img src="/images/logo2.svg" alt="ig.news" />
        </a>

        <nav>
          <a href="" className={styles.active}>
            Home
          </a>
          <a href="">Posts</a>
        </nav>

        <SigninButton />
      </div>
    </header>
  );
}
