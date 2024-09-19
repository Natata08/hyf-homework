"use client";

import { usePathname } from "next/navigation";
import Layout from "../Layout.js";

export default function BlogPost() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <Layout>
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>{title}</h1>
      <p>This is the content of {title}.</p>
    </Layout>
  );
}
