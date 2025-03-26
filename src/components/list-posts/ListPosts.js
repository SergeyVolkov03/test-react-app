import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostsForUserId } from "../../api/posts/getPosts";
import Post from "../post/Post";
import "../list-posts/ListPost.css";

export default function ListPosts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [isFething, setIsFething] = useState(false);
  console.log(posts);

  useEffect(() => {
    async function fetchPosts() {
      setIsFething(true);
      const posts = await getPostsForUserId(id);
      setPosts(posts);
      setIsFething(false);
    }
    fetchPosts();
  }, [id]);

  return (
    <ul className="post-list">
      {isFething ? (
        <p>loading</p>
      ) : (
        posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))
      )}
    </ul>
  );
}
