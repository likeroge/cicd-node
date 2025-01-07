import express from "express";

const app = express();
const PORT = 5005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("Test ACK");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
