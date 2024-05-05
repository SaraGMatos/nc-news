import { useState, useEffect } from "react";
import { fetchArticles } from "../../api";
import Header from "./Header";
import ArticleCard from "./ArticleCard";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Link } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  const { user } = useContext(UserContext);

  function handleClickPrevious() {
    setCurrentPage(currentPage - 1);
  }

  function handleClickNext() {
    setCurrentPage(currentPage + 1);
  }

  function getArticles() {
    fetchArticles(currentPage).then((articlesData) => {
      const articlesInfo = articlesData.data.articles.articles;
      setArticles(articlesInfo);
    });
  }
  useEffect(getArticles, [currentPage]);

  return (
    <div>
      <Header user={user} />
      <div className="articles-container">
        <h2>ARTICLES</h2>
        <ul>
          {articles.map((article) => {
            return (
              <li key={article.article_id}>
                <ArticleCard article={article} />
              </li>
            );
          })}
        </ul>
        <div className="button-container">
          <Link to={`/articles?p=${currentPage - 1}`}>
            <button
              className="articles-button"
              disabled={currentPage === 1}
              onClick={handleClickPrevious}
            >
              Previous
            </button>
          </Link>
          <Link to={`/articles?p=${currentPage + 1}`}>
            <button
              className="articles-button"
              disabled={articles.length < 10}
              onClick={handleClickNext}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Articles;
