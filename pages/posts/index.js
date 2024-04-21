import AllPosts from "../../components/UI/posts/all-posts";
import { getAllPosts } from "../../server/posts";
const DUMMY_POSTS = [{ title: "next JS", image: "next.png", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", date: "2024-14-4", slug: "next-js" }];

function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export async function getStaticProps(context) {
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 10,
  };
}

export default AllPostsPage;
