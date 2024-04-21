import Markdown from "react-markdown";
import PostHeader from "./post-header";
import styles from "./post-content.module.css";

const DUMMY_POSTDETAIL = { title: "next JS", image: "next.png", content: "# Lorem ipsum dolor sit ametsi ut aliquip ex ea commodo consequat.", date: "2024-14-4", slug: "next-js" };
function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <Markdown>{post.content}</Markdown>
    </article>
  );
}

export default PostContent;
