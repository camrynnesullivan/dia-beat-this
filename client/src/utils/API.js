import axios from "axios";

export default {
  // // Gets books from the Google API
  // getGlycemia: function(q) {
  //   return axios.get("/api/google", { params: { q: "title:" + q } });
  // },
  // Gets all saved Glycemia Measurements
  getSavedGlycemia: function () {
    return axios.get("/api/measurements");
  },
  // Gets all saved A1C Measurements
  getSavedA1C: function () {
    return axios.get("/api/A1Cmeasurements");
  },
  getSavedFoodGoal: function () {
    return axios.get("/api/FoodGoal");
  },
  // Deletes the saved book with the given id
  deleteGlycemia: function (id) {
    return axios.delete("/api/measurements/" + id);
  },
  // Saves a Glycemia Measurement to the database
  saveGlycemia: function (measurementData) {
    return axios.post("/api/measurements", measurementData);
  },
  // Saves an A1C Measurement to the database
  saveA1C: function (measurementData) {
    return axios.post("/api/A1Cmeasurements", measurementData);
  },
  saveFoodGoal: function (measurementData) {
    return axios.post("/api/FoodGoal", measurementData);
  },

  // Gets all posts
  getPosts: function () {
    return axios.get("/api/journal");
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
    return axios.post("/api/journal", postData);
  },
};
