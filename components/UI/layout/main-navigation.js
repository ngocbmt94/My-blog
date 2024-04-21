import Logo from "./logo";
import Link from "next/link";
import styles from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact with me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
