import axios from "axios";

export default {
  // Gets all posts
  getPosts: function () {
    return axios.get("/journal/posts");
  },
  // Gets the post with the given id
  getPost: function (id) {
    return axios.get("/journal/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function (id) {
    return axios.delete("/journal/posts/" + id);
  },
  // Saves a post to the database
  savePost: function (postData) {
    return axios.post("/journal/posts", postData);
  },
};
