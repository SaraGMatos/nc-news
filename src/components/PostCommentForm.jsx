import { addCommentByArticleId } from "../../api";
import { useState } from "react";

function PostCommentForm({ id, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    setIsLoading(true);
    addCommentByArticleId(id, newComment)
      .then((response) => {
        alert(`You posted your comment!`);
        setComments((currComments) => {
          return [response.data.comment, ...currComments];
        });
        setIsLoading(false);
      })
      .catch((error) => {
        alert(`Oopsie, there's been an error. Try again please.`);
        console.log(error);
      });

    setNewComment("");
    event.preventDefault();
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
      <button className="submit-button">Post</button>
      {isLoading && (
        <h2 className="loading-text">
          Your post is on its way, please wait...
        </h2>
      )}
    </form>
  );
}

export default PostCommentForm;
