import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
  };
}

export default async function Blog({ params }) {
  const { blogID } = await params;
  if (isNaN(Number(blogID))) {
    console.log("blog id is not number");
    notFound();
  }
  return <div>Blog {blogID} </div>;
}
