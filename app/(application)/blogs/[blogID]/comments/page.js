export default async function Comment({ params }) {
  const { commentId } = await params;
  return <div>Comments {commentId} </div>;
}
