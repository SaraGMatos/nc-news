import { addCommentByArticleId } from "../../api";
import { useState } from "react";

function PostCommentForm({ id, setComments, setCommentCount }) {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsClicked(true);
    setIsLoading(true);
    addCommentByArticleId(id, newComment)
      .then((response) => {
        setComments((currComments) => {
          return [response.data.comment, ...currComments];
        });
        setCommentCount((currCount) => currCount + 1);
        setIsClicked(false);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
      });

    setNewComment("");
  }

  return (
    <form
      className="form-container"
      name="form-container"
      onSubmit={handleSubmit}
    >
      <label htmlFor="form-container">Add a comment</label>
      <textarea
        value={newComment}
        placeholder="be nice!"
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      ></textarea>
      {error && <h2 className="error-text">Please write something!</h2>}
      <button className="submit-button" disabled={isClicked}>
        Post
      </button>
      {isLoading && (
        <h2 className="loading-text">
          Your post is on its way, please wait...
        </h2>
      )}
    </form>
  );
}

export default PostCommentForm;
