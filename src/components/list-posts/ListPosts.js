import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostsForUserId } from "../../api/posts/getPosts";
import Post from "../post/Post";
import "../list-posts/ListPost.css";

export default function ListPosts() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [isFething, setIsFething] = useState(false);
  console.log(posts, userId);

  useEffect(() => {
    async function fetchPosts() {
      setIsFething(true);
      const posts = await getPostsForUserId(userId);
      setPosts(posts);
      setIsFething(false);
    }
    fetchPosts();
  }, [userId]);

  return (
    <ul className="post-list">
      <p>Posts</p>
      {isFething ? (
        <p>loading</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </ul>
  );
}
