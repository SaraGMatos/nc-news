function CommentCard({ comment }) {
  return (
    <section className="comment-card-container">
      <h2>{comment.author}</h2>
    </section>
  );
}

export default CommentCard;
