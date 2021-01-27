import Express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = Express()
const port = 3000
app.use(cors)

app.get("/", (req, res) => {
    fs.readFile("db.json", (error, content) => {
        const items = JSON.parse(content)
        res.json(items)
    })
})


app.listen(port, ()=> console.log("Listion on port " + port))