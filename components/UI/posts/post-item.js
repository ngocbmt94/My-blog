import styles from "./post-item.module.css";
import { formatDate } from "../../../help/help";
import Link from "next/link";
import Image from "next/image";

function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;

  const filePath = `/images/posts/${slug}/${image}`;
  return (
    <li className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.image}>
          <Image src={filePath} alt={title} width={400} height={220} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formatDate(date)}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
