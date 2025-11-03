import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
  };
}

export async function generateStaticParams() {
  //   return [{ blogID: "1" }, { blogID: "2" }, { blogID: "3" }, { blogID: "4" }];
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data.map(({ id }) => ({ blogID: `{id}` }));
}

export default async function Blog({ params }) {
  const { blogID } = await params;
  if (isNaN(Number(blogID))) {
    console.log("blog id is not number");
    notFound();
  }
  return <div>Blog {blogID} </div>;
}
