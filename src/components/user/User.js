import { Link } from "react-router-dom";
import "../user/User.css";

export default function User({ name, id }) {
  return (
    <li className="user">
      <Link className="link" to={`users/${id}/posts`}>
        {name}
      </Link>
    </li>
  );
}
