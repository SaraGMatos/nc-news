import { useEffect, useState } from "react";
import { fetchCommentsById } from "../../api";
import CommentCard from "./CommentCard";
import { addCommentByArticleId } from "../../api";
import { Link } from "react-router-dom";

function ArticleComments({ id }) {
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState("");

  function getCommentsById() {
    fetchCommentsById(id).then((commentsData) => {
      const commentsInfo = commentsData.data.comments;
      setComments(commentsInfo);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    addCommentByArticleId(id, currentComment)
      .then((response) => {
        setComments((currComments) => [response, ...currComments]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(getCommentsById, [comments]);

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
      <form
        className="form-container"
        name="form-container"
        onSubmit={handleSubmit}
      >
        <label htmlFor="form-container">Add a comment</label>
        <textarea
          value={currentComment}
          placeholder="be nice!"
          onChange={(event) => {
            setCurrentComment(event.target.value);
          }}
        ></textarea>
        <button className="submit-button">Post</button>
      </form>
    </section>
  );
}

export default ArticleComments;
