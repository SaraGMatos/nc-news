import { useEffect, useState } from "react";
import { fetchCommentsById } from "../../api";
import CommentCard from "./CommentCard";

function ArticleComments({ id }) {
  const [comments, setComments] = useState([]);

  function getCommentsById() {
    fetchCommentsById(id).then((commentsData) => {
      const commentsInfo = commentsData.data.comments;
      setComments(commentsInfo);
    });
  }

  useEffect(getCommentsById, []);

  return (
    <section className="comments-section">
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ArticleComments;
