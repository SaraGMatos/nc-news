import { useState } from "react";

function CommentCard({ comment }) {
  const [currentVotes, setCurrentVotes] = useState(comment.votes);
  console.log(currentVotes);
  function handleUpButton() {
    return setCurrentVotes((currVotes) => {
      console.log("hi up");
      return currVotes + 1;
    });
  }

  function handleDownButton() {
    return setCurrentVotes((currVotes) => {
      console.log("hi down");
      return currVotes - 1;
    });
  }

  return (
    <section className="comment-card-container">
      <div className="comment-card-header">
        <h2>{comment.author}</h2>
        <h3>{moment(comment.created_at).format("DD MMM YYYY")}</h3>
      </div>
      <p className="comment-card-body">{comment.body}</p>
      <div className="comment-votes">
        <button className="comment-vote-button" onClick={handleUpButton}>
          +
        </button>
        <p>{currentVotes}</p>
        <button className="comment-vote-button" onClick={handleDownButton}>
          -
        </button>
      </div>
    </section>
  );
}

export default CommentCard;
