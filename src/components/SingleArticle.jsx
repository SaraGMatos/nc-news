import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../api";
import Header from "./Header";
import SingleArticleHeader from "./SingleArticleHeader";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import Expandable from "./Expandable";
import ArticleComments from "./ArticleComments";
import { updateArticleByArticleId } from "../../api";
import ErrorAlert from "./ErrorAlert";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [voteUpdate, setVoteUpdate] = useState(0);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function getArticleById() {
    fetchArticleById(id)
      .then((articleData) => {
        const articleInfo = articleData.data.article;
        setArticle(articleInfo);
      })
      .catch(() => {
        setError(true);
      });
  }
  useEffect(getArticleById, [id]);

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
    <>
      <Header user={user} />
      <SingleArticleHeader article={article} />
      <img className="article-image" src={article.article_img_url} />
      <section className="article-body">{article.body}</section>
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
        {isLoading && (
          <h2 className="loading-text">
            Your vote is on its way, please wait...
          </h2>
        )}
      </div>
      {error && (
        <ErrorAlert message={"Something went wrong. Please try again!"} />
      )}
      <Expandable id={id}>
        <ArticleComments id={id} />
      </Expandable>
    </>
  );
}

export default SingleArticle;
