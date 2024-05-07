import { useState } from "react";
import { updateVoteByCommentId } from "../../api";
import { deleteCommentById } from "../../api";
import ErrorAlert from "./ErrorAlert";
import { useNavigate } from "react-router-dom";

function CommentCard({ setComments, comment, articleId }) {
  const [voteCount, updateVoteCount] = useState(comment.votes);
  const [voteUpdate, setVoteUpdate] = useState(0);
  const [error, setError] = useState(null);
  const [isVoteLoading, setIsVoteLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const navigate = useNavigate();

  function handleVote(vote) {
    setIsVoteLoading(true);
    updateVoteByCommentId(vote, comment.comment_id)
      .then((response) => {
        updateVoteCount(response.data.comment.votes);
        setIsVoteLoading(false);
      })
      .catch((error) => {
        setError({ error });
      });

    setVoteUpdate((currVoteUpdate) => {
      return vote + currVoteUpdate;
    });
  }

  function handleDelete() {
    setIsDeleteLoading(true);
    deleteCommentById(comment.comment_id).then(() => {
      setComments((currComments) =>
        currComments.filter(
          (comment) => comment.comment_id !== comment.comment_id
        )
      );
      setIsDeleteLoading(false);
      navigate(`/articles/${articleId}`);
      alert(`You deleted your comment!`);
    });
  }

  if (error) {
    return <ErrorAlert message={"Something went wrong. Please try again"} />;
  }

  return (
    <section className="comment-card-container">
      <div className="comment-card-header">
        <h2>{comment.author}</h2>
        <h3>{moment(comment.created_at).format("DD MMM YYYY")}</h3>
      </div>
      <div className="comment-card-middle-section">
        <p className="comment-card-body">{comment.body}</p>
        {comment.author === "grumpy19" ? (
          <button className="comment-card-delete" onClick={handleDelete}>
            Delete
          </button>
        ) : null}
      </div>
      {isDeleteLoading ? (
        <h2 className="loading-text">We're deleting your comment...</h2>
      ) : null}
      <div className="comment-votes">
        <button
          className="comment-vote-button"
          disabled={voteUpdate === 1}
          onClick={() => handleVote(1)}
        >
          +
        </button>
        <p>{voteCount}</p>
        <button
          className="comment-vote-button"
          disabled={voteUpdate === -1}
          onClick={() => handleVote(-1)}
        >
          -
        </button>
      </div>
      {isVoteLoading ? (
        <h2 className="loading-text">
          Your vote is on its way, please wait...
        </h2>
      ) : null}
    </section>
  );
}

export default CommentCard;
