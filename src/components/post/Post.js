import { Link } from "react-router-dom";
import "../post/Post.css";

export default function Post({ post }) {
  return (
    <li className="post">
      <Link className="link" to={`${post.id}`}>
        <p className="title"> {post.title}</p>
        <p className="description">{post.body}</p>
      </Link>
    </li>
  );
}
