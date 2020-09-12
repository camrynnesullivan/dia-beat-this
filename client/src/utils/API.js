import axios from "axios";

export default {
  // Gets books from the Google API
  getGlucose: function (q) {
    return axios.get("/api/glycemia");
  },

  // Saves an book to the database
  saveGlucose: function (glucoseData) {
    return axios.post("/api/glycemia", glucoseData);
  },
};
