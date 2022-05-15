import axios from "axios";

const getPractices = async () => {
  return axios.get("/api/practices").then((articles) => articles.data);
};

const postPractices = async (article) => {
  return axios
    .post("/api/practices", article)
    .then((articles) => articles.data);
};

export { getPractices, postPractices };
