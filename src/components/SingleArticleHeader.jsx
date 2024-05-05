function SingleArticleHeader({ article }) {
  return (
    <header className="article-header">
      <h3 className="article-topic">{article.topic}</h3>
      <h2 className="article-title">{article.title}</h2>
      <div className="article-author-date">
        <h3>{article.author}</h3>
        <h3>{moment(article.created_at).format("Do MMMM YYYY")}</h3>
      </div>
    </header>
  );
}

export default SingleArticleHeader;
