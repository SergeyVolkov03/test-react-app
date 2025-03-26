import { Link } from "react-router-dom";
import "../post/Post.css";

export default function Post({ title, body }) {
  return (
    <li className="post">
      <Link className="link">
        <p className="title"> {title}</p>
        <p className="description">{body}</p>
      </Link>
    </li>
    /* <Link to={`users/${id}/posts`}>{name}</Link> */
  );
}
