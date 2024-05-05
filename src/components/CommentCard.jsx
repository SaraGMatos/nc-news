function CommentCard({ comment }) {
  return (
    <section className="comment-card-container">
      <div className="comment-card-header">
        <h2>{comment.author}</h2>
        <h3>{moment(comment.created_at).format("DD MMM YYYY")}</h3>
      </div>
      <p className="comment-card-body">{comment.body}</p>
      <div className="comment-votes">
        <button className="comment-vote-button">+</button>
        <p>{comment.votes}</p>
        <button className="comment-vote-button">-</button>
      </div>
    </section>
  );
}

export default CommentCard;
