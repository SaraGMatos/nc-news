import { useEffect, useState } from "react";
import { fetchCommentsById } from "../../api";
import CommentCard from "./CommentCard";
import PostCommentForm from "./PostCommentForm";
import ErrorAlert from "./ErrorAlert";

function ArticleComments({ id, article }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentCount, setCommentCount] = useState(article.comment_count);

  function getCommentsById() {
    setIsLoading(true);
    fetchCommentsById(id).then((commentsData) => {
      const commentsInfo = commentsData.data.comments;
      setComments(commentsInfo);
      setIsLoading(false);
    });
  }
  useEffect(getCommentsById, [id]);

  if (isLoading) {
    return (
      <h2 className="comment-loading-text">Comments loading, please wait...</h2>
    );
  }
  return (
    <section className="comments-section">
      {comments.length === 0 ? (
        <ErrorAlert message={"No comments here yet!"} />
      ) : null}
      <PostCommentForm
        id={id}
        setComments={setComments}
        setCommentCount={setCommentCount}
      />
      <p className="comment-count">{`${commentCount} comments`}</p>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard
                setComments={setComments}
                comment={comment}
                setCommentCount={setCommentCount}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ArticleComments;
