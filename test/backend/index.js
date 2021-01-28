// using express
const express = require('express')

// Using cors to allow "Access-control-Allow-Origin" (Cross-site) domain
const cors = require('cors')

const fs = require('fs')

// Initialize app
const app = express();

app.use(cors);
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world from server");
});


app.get('/todo', (req, res) => {
    fs.readFile('db.json', (err, content) => {
        const items = JSON.parse(content)

        res.json(item)
    })
})

app.listen(port, () => {
  console.log("Hell this is port " + port);
});
