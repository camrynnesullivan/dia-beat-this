import axios from "axios";

export default {
  // // Gets books from the Google API
  // getGlycemia: function(q) {
  //   return axios.get("/api/google", { params: { q: "title:" + q } });
  // },
  // Gets all saved books
  getSavedGlycemia: function() {
    return axios.get("/api/measurements");
  },
  // Deletes the saved book with the given id
  deleteGlycemia: function(id) {
    return axios.delete("/api/measurements/" + id);
  },
  // Saves an book to the database
  saveGlycemia: function(measurementData) {
    return axios.post("/api/measurements", measurementData);
  }
};
