import { useState } from "react";
import { updateVoteByCommentId } from "../../api";
import ErrorAlert from "./ErrorAlert";

function CommentCard({ comment }) {
  const [voteCount, updateVoteCount] = useState(comment.votes);
  const [voteUpdate, setVoteUpdate] = useState(0);
  const [error, setError] = useState(null);

  function handleVote(vote) {
    updateVoteByCommentId(vote, comment.comment_id)
      .then((response) => {
        updateVoteCount(response.data.comment.votes);
      })
      .catch((error) => {
        setError({ error });
      });

    setVoteUpdate((currVoteUpdate) => {
      return vote + currVoteUpdate;
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
      <p className="comment-card-body">{comment.body}</p>
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
    </section>
  );
}

export default CommentCard;
