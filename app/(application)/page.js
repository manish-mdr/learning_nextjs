import Link from "next/link";
import ComponentPage from "../../components/page";

export const metadata = {
  title: {
    template: "%s | Technical Agency",
    default: "Technical Agency",
  },
};

export default function Home() {
  return (
    <>
      <h1>Technical Agency</h1>
      <ComponentPage />
      <p>
        <Link href="/blogs">Blogs</Link>
      </p>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/service">Service</Link>
      </p>
      <p>
        <Link href="/files">Files</Link>
      </p>
    </>
  );
}
