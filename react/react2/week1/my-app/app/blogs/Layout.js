import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <header style={{ marginBottom: "2rem" }}>
        <nav>
          <Link href='/blogs'>Blogs</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
