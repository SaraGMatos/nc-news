import { useState, useEffect, useContext } from "react";
import { fetchArticles } from "../../api";
import Header from "./Header";
import ArticleCard from "./ArticleCard";
import { UserContext } from "../contexts/User";
import TopicsSelect from "./TopicsSelect";
import { useSearchParams } from "react-router-dom";
import SortBySelect from "./SortBySelect";
import OrderSelect from "./OrderSelect";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTopic, setCurrentTopic] = useState("");
  const [currentSortBy, setCurrentSortBy] = useState("");
  const [currentOrder, setCurrentOrder] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const params = {
    p: currentPage,
  };

  function handleClickPrevious() {
    setCurrentPage(currentPage - 1);
  }

  function handleClickNext() {
    setCurrentPage(currentPage + 1);
  }

  function getArticles() {
    window.scrollTo(0, 0);

    if (currentTopic) {
      params.topic = currentTopic;
      setSearchParams(params);
    }
    if (currentSortBy) {
      params.sort_by = currentSortBy;
      setSearchParams(params);
    }

    if (currentOrder) {
      params.order = currentOrder;
      setSearchParams(params);
    }
    setSearchParams(params);

    setIsLoading(true);

    fetchArticles(currentPage, currentTopic, currentSortBy, currentOrder).then(
      (articlesData) => {
        const articlesInfo = articlesData.data.articles.articles;
        setArticles(articlesInfo);
        setIsLoading(false);
        setIsPageLoading(false);
      }
    );
  }
  useEffect(getArticles, [
    currentPage,
    currentTopic,
    currentSortBy,
    currentOrder,
  ]);

  if (isPageLoading) {
    return <h2 className="loading-text">Page loading, please wait...</h2>;
  }

  return (
    <div>
      <Header user={user} />
      <div className="articles-container">
        <div className="sorting-options">
          <TopicsSelect
            setCurrentPage={setCurrentPage}
            setCurrentTopic={setCurrentTopic}
          />
          <SortBySelect
            setCurrentPage={setCurrentPage}
            setCurrentSortBy={setCurrentSortBy}
          />
          <OrderSelect
            setCurrentPage={setCurrentPage}
            setCurrentOrder={setCurrentOrder}
          />
        </div>
        <div className="articles-list">
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
    </div>
  );
}

export default Articles;
