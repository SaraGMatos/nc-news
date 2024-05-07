import { useEffect, useState } from "react";
import { fetchCommentsById } from "../../api";
import CommentCard from "./CommentCard";
import PostCommentForm from "./PostCommentForm";

function ArticleComments({ id }) {
  const [comments, setComments] = useState([]);

  function getCommentsById() {
    fetchCommentsById(id).then((commentsData) => {
      const commentsInfo = commentsData.data.comments;
      setComments(commentsInfo);
    });
  }
  useEffect(getCommentsById, [id, comments.length]);

  return (
    <section className="comments-section">
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard
                setComments={setComments}
                comment={comment}
                articleId={id}
              />
            </li>
          );
        })}
      </ul>
      <PostCommentForm id={id} setComments={setComments} />
    </section>
  );
}

export default ArticleComments;
