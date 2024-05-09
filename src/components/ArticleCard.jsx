import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <div className="article-card">
        <div className="article-card-img">
          <img src={article.article_img_url} />
        </div>

        <div className="article-card-content">
          <div className="article-card-topic-author">
            <p id="topic">{article.topic}</p>
            <p id="author">{article.author}</p>
          </div>
          <h3>
            {article.title.length < 56
              ? article.title
              : article.title.slice(0, 56) + "..."}
          </h3>
          <p className="article-date">
            {moment(article.created_at).format("DD MMM YYYY")}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
