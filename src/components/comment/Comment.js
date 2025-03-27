import "../comment/Comment.css";

export default function Comment({ comment }) {
  return (
    <li className="comment">
      <p>{comment.email}</p>
      <p>{comment.name}</p>
      <p>{comment.body}</p>
    </li>
  );
}
