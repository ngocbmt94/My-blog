import FeaturedPosts from "../components/home/featured-posts";
import Hero from "../components/home/hero";
import { getFeaturedPost } from "../server/posts";

const DUMMY_POSTS = [{ title: "next JS", image: "next.png", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", date: "2024-14-4", slug: "next-js" }];
function Home({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export async function getStaticProps(context) {
  const featuredPosts = await getFeaturedPost();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 10,
  };
}

export default Home;
