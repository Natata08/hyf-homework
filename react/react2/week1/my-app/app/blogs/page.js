import Layout from "./Layout.js";
import Link from "next/link";

const blogPosts = [
  { slug: "my-first-post", title: "My First Post" },
  { slug: "my-second-post", title: "My Second Post" },
  { slug: "my-third-post", title: "My Third Post" },
];

export default function Blogs() {
  return (
    <Layout>
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>Blog Posts</h1>
      <ul
        style={{
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
