function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <div className="article-card-img">
        <img src={article.article_img_url} />
      </div>

      <div className="article-card-content">
        <div className="article-card-topic-author">
          <p>{article.topic}</p>
          <p>{article.author}</p>
        </div>
        <h3>
          {article.title.length < 56
            ? article.title
            : article.title.slice(0, 56) + "..."}
        </h3>
      </div>
    </div>
  );
}

export default ArticleCard;
