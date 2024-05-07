import { useState, useEffect } from "react";
import { fetchArticles } from "../../api";
import Header from "./Header";
import ArticleCard from "./ArticleCard";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Link } from "react-router-dom";
import TopicsSelect from "./TopicsSelect";
import { useSearchParams } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  console.log(articles);

  function handleClickPrevious() {
    setCurrentPage(currentPage - 1);
  }

  function handleClickNext() {
    setCurrentPage(currentPage + 1);
  }

  function getArticles() {
    setIsLoading(true);
    fetchArticles(currentPage, topic).then((articlesData) => {
      const articlesInfo = articlesData.data.articles.articles;
      setArticles(articlesInfo);
      setIsLoading(false);
    });
  }
  useEffect(getArticles, [currentPage, topic]);

  if (isLoading) {
    return <h2 className="loading-text">Page loading, please wait...</h2>;
  }

  return (
    <div>
      <Header user={user} />
      <TopicsSelect setSearchParams={setSearchParams} />
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
