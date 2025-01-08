import axios from "axios";
import express from "express";
import { users } from "./data/users.js";

const app = express();
const PORT = 5005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts", async (req, res) => {
  try {
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/users", async (req, res) => {
  const { data: users } = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  console.log(users);
  res.status(200).send(users);
});

app.get("/test", (req, res) => {
  res.send("Test ACK");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
