export async function getPostsForUserId(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const posts = await response.json();
  return posts;
}
