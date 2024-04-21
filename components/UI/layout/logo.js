import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.css";

function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <div className={styles.image}>
        <Image src="/images/logo.svg" width={100} height={100} alt="my-logo" />
      </div>
      <p>My Blog</p>
    </Link>
  );
}

export default Logo;
