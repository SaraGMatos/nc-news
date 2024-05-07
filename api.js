import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-app-jnwm.onrender.com/api",
});

export function fetchArticles(currentPage, topic) {
  return ncNewsApi.get("/articles", {
    params: {
      p: `${currentPage}`,
      topic: topic,
    },
  });
}

export function fetchArticleById(id) {
  return ncNewsApi.get(`/articles/${id}`);
}

export function fetchCommentsById(id) {
  return ncNewsApi.get(`/articles/${id}/comments`);
}

export function updateVoteByCommentId(votes, id) {
  return ncNewsApi.patch(`/comments/${id}`, {
    inc_votes: votes,
  });
}

export function updateArticleByArticleId(votes, id) {
  return ncNewsApi.patch(`/articles/${id}`, {
    inc_votes: votes,
  });
}

export function addCommentByArticleId(id, newComment) {
  return ncNewsApi.post(`/articles/${id}/comments`, {
    username: "grumpy19",
    body: newComment,
  });
}

export function deleteCommentById(id) {
  return ncNewsApi.delete(`/comments/${id}`);
}
