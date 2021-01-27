import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors);

app.get("/", (req, res) => {
  res.send("Hello this is server");
});

app.listen(port, () => {
  console.log("Listen on port " + port);
});
