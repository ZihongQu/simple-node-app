const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

app.get("/a", (req, res) => {
  res.status(200).json({ message: "Hello world from A" });
});

app.listen(5001, () => {
  console.log("Listening on port 5001");
});
