let glycemias = [];

fetch("/api/glycemia")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // save db data on global variable
    glycemias = data;
    console.log(glycemias);
  });

document.querySelector("#sub-btn").onclick = function () {
  sendGlycemia(true);
};
