const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("get data");
});

app.get("/about", (request, response) => {
  response.send("get about data");
});

app.get("/blogs", (request, response) => {
  response.send("get blogs data");
});

app.listen("1234", () => {
  console.log("server is running port 1234");
});
