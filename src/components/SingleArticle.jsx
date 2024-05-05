import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../api";
import Header from "./Header";
import SingleArticleHeader from "./SingleArticleHeader";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import Expandable from "./Expandable";
import ArticleComments from "./ArticleComments";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const { user } = useContext(UserContext);
  const { id } = useParams();

  function getArticleById() {
    fetchArticleById(id).then((articleData) => {
      const articleInfo = articleData.data.article;
      setArticle(articleInfo);
    });
  }
  useEffect(getArticleById, [id]);

  return (
    <>
      <Header user={user} />
      <SingleArticleHeader article={article} />
      <img className="article-image" src={article.article_img_url} />
      <section className="article-body">{article.body}</section>
      <Expandable id={id}>
        <ArticleComments id={id} />
      </Expandable>
    </>
  );
}

export default SingleArticle;
