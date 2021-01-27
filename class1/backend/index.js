import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express()
const port = 3000
app.use(cors)

app.get("/", (req, res) => {
    console.log("GET DATA FROM DATABASE")
    fs.readFile("db.json", (error, content) => {
        const items = JSON.parse(content)
        res.json(items)
    })
})


app.listen(port, ()=> {console.log("Listen on port " + port)})