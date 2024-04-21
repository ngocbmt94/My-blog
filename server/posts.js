import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts-data");

export function getPostFiles() {
  return fs.readdirSync(postDirectory);
}
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // remove file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent); //Converts a string with front-matter: https://www.npmjs.com/package/gray-matter

  const postData = { slug: postSlug, content, ...data };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  const sortPosts = allPosts.sort((postA, postB) => postA.date - postB.date);

  return sortPosts;
}

export function getFeaturedPost() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
