export default async function Comment({ params }) {
  const { commentID } = await params;
  return <div>there are some Comments {commentID} </div>;
}
