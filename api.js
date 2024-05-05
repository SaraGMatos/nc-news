import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-app-jnwm.onrender.com/api",
});

export function fetchArticles(currentPage) {
  return ncNewsApi.get("/articles", {
    params: {
      p: `${currentPage}`,
    },
  });
}

export function fetchArticleById(id) {
  return ncNewsApi.get(`/articles/${id}`);
}

export function fetchCommentsById(id) {
  return ncNewsApi.get(`/articles/${id}/comments`);
}
