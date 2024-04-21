import PostContent from "../../components/UI/posts/post-content";
import { getPostData, getPostFiles } from "../../server/posts";

function PostDetail({ post }) {
  return <PostContent post={post} />;
}

export async function getStaticProps(context) {
  const { params, res, req } = context;
  const postId = params.postId;

  const data = await getPostData(postId);

  return {
    props: {
      post: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const postFileNames = getPostFiles();
  const postIdArr = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  const paths = postIdArr.map((id) => ({ params: { postId: id } }));

  return { paths, fallback: true };
}

export default PostDetail;
