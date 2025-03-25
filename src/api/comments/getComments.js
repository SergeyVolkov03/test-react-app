export async function getCommentsForPostId(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const comments = await response.json();
  return comments;
}
