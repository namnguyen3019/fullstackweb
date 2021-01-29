import express from "express";
import fs from "fs";
import cors from "cors";


const app = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  fs.readFile('./db.json', (err, jsonString) => {
    if (err){
      console.log(err)
    } else{
      const data = JSON.parse(jsonString)
      res.send(data)
    }
  })
});

app.listen(port, () => {
  console.log("Listen on port " + port);
});
