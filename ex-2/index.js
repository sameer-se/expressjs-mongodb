const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("api/plroducs/", (req, res) => {
  res.send("Hi hi hi hi");
});

app.listen(8000, () => {
  console.log("server startd");
});
