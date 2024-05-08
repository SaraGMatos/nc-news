import { useState, useEffect, useContext } from "react";
import { fetchArticles } from "../../api";
import Header from "./Header";
import ArticleCard from "./ArticleCard";
import { UserContext } from "../contexts/User";
import TopicsSelect from "./TopicsSelect";
import { useSearchParams } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTopic, setCurrentTopic] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(true);

  function handleClickPrevious() {
    setCurrentPage(currentPage - 1);
  }

  function handleClickNext() {
    setCurrentPage(currentPage + 1);
  }

  function getArticles() {
    if (currentTopic) {
      setSearchParams({ topic: currentTopic, p: currentPage });
    } else {
      setSearchParams({ p: currentPage });
    }

    setIsLoading(true);

    fetchArticles(currentPage, currentTopic).then((articlesData) => {
      const articlesInfo = articlesData.data.articles.articles;
      setArticles(articlesInfo);
      setIsLoading(false);
      setIsPageLoading(false);
    });
  }
  useEffect(getArticles, [currentPage, currentTopic]);

  if (isPageLoading) {
    return <h2 className="loading-text">Page loading, please wait...</h2>;
  }

  return (
    <div>
      <Header user={user} />
      <TopicsSelect
        className="topics-select"
        setCurrentPage={setCurrentPage}
        setCurrentTopic={setCurrentTopic}
      />
      <div className="articles-container">
        <h2>ARTICLES</h2>
        {isLoading ? (
          <h2 className="loading-text">Articles loading, please wait...</h2>
        ) : null}

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
          <button
            className="articles-button"
            disabled={currentPage === 1}
            onClick={handleClickPrevious}
          >
            Previous
          </button>

          <button
            className="articles-button"
            disabled={articles.length < 10}
            onClick={handleClickNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Articles;
