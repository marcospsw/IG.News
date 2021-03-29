import { SigninButton } from '../SigninButton';
import styles from './styles.module.scss';
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <img src="/images/logo2.svg" alt="ig.news" />
          </a>
        </Link>
        <nav>
          <ActiveLink activeClass={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClass={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SigninButton />
      </div>
    </header>
  );
}
