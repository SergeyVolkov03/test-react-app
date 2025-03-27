import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ListComments.css";
import { getCommentsForPostId } from "../../api/comments/getComments";
import Comment from "../comment/Comment";

export default function ListComments() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [isFething, setIsFething] = useState(false);

  useEffect(() => {
    async function fetchComments() {
      setIsFething(true);
      const comments = await getCommentsForPostId(postId);
      setComments(comments);
      setIsFething(false);
    }
    fetchComments();
  }, [postId]);

  return (
    <ul className="comment-list">
      <p>Comments</p>
      {isFething ? (
        <p>loading</p>
      ) : (
        comments.map((comment) => <Comment comment={comment} />)
      )}
    </ul>
  );
}
