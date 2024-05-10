import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";
import Header from "./Header";
import SingleArticleHeader from "./SingleArticleHeader";
import Expandable from "./Expandable";
import ArticleComments from "./ArticleComments";
import LoadingPage from "./LoadingPage";
import { fetchArticleById } from "../../api";
import { updateArticleByArticleId } from "../../api";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [voteUpdate, setVoteUpdate] = useState(0);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  function getArticleById() {
    setIsPageLoading(true);
    fetchArticleById(id)
      .then((articleData) => {
        const articleInfo = articleData.data.article;
        setArticle(articleInfo);
        setIsPageLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }

  useEffect(getArticleById, [id]);

  if (isPageLoading) {
    return <LoadingPage message={"We're fetching the article!"} />;
  }

  function handleVote(vote) {
    setIsLoading(true);
    updateArticleByArticleId(vote, id).then(() => {
      setVoteUpdate((currVoteUpdate) => {
        return vote + currVoteUpdate;
      });
      setIsLoading(false);
    });
  }

  return (
    <div>
      <Header user={user} />
      {error && (
        <div className="error-container">
          <h2 className="error-text">The required article does not exist.</h2>
        </div>
      )}
      <div>
        {!error && <SingleArticleHeader article={article} />}
        <div className="single-article-container">
          <div className="article-image">
            <img src={article.article_img_url} />
          </div>

          <section className="article-body">{article.body}</section>
          {!error && (
            <div className="article-votes">
              <button
                className="article-vote-button"
                disabled={voteUpdate === 1}
                onClick={() => handleVote(1)}
              >
                +
              </button>
              <p>{String(article.votes + voteUpdate)}</p>
              <button
                className="article-vote-button"
                disabled={voteUpdate === -1}
                onClick={() => handleVote(-1)}
              >
                -
              </button>
            </div>
          )}
          <div>
            {isLoading && (
              <h2 className="vote-text">
                Your vote is on its way, please wait...
              </h2>
            )}
          </div>
          {!error && (
            <Expandable id={id}>
              <ArticleComments id={id} article={article} />
            </Expandable>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleArticle;
