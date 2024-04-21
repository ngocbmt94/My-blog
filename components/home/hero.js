import Image from "next/image";
import styles from "./hero.module.css";
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image alt="image of bich ngoc" src="/images/me.jpg" width={400} height={400} />
      </div>
      <h1>Hi, I'm Bich Ngoc</h1>
      <p>I blog about web development - especially Frontend framework like React JS, Next JS</p>
    </section>
  );
}

export default Hero;
