import axios from "axios";
import express from "express";
import { users } from "./data/users";

const app = express();
const PORT = 5005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts", async (req, res) => {
  const posts = axios.get("https://jsonplaceholder.typicode.com/posts");
  res.status(200).send(posts);
});

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.get("/test", (req, res) => {
  res.send("Test ACK");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
