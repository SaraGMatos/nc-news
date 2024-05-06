import { addCommentByArticleId } from "../../api";
import { useState } from "react";

function PostCommentForm({ id, setComments }) {
  const [newComment, setNewComment] = useState("");

  function handleSubmit(event) {
    addCommentByArticleId(id, newComment)
      .then((response) => {
        setComments((currComments) => {
          return [response.data.comment, ...currComments];
        });
      })
      .catch((error) => {
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
    </form>
  );
}

export default PostCommentForm;
