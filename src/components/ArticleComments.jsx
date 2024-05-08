import { useEffect, useState } from "react";
import { fetchCommentsById } from "../../api";
import CommentCard from "./CommentCard";
import PostCommentForm from "./PostCommentForm";
import ErrorAlert from "./ErrorAlert";

function ArticleComments({ id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getCommentsById() {
    setIsLoading(true);
    fetchCommentsById(id).then((commentsData) => {
      const commentsInfo = commentsData.data.comments;
      setComments(commentsInfo);
      setIsLoading(false);
    });
  }
  useEffect(getCommentsById, [id, comments.length]);

  if (isLoading) {
    return <h2 className="loading-text">Comments loading, please wait...</h2>;
  }
  return (
    <section className="comments-section">
      <ul>
        {comments.length === 0 ? (
          <ErrorAlert message={"No comments here yet!"} />
        ) : null}
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
