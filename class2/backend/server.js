const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
app.use(cors())

port = 5000

// GET : todo list
app.get('/todolist', (req, res)=> {
    fs.readFile('./data/todolist.json', (err, jsonString)=>{
        if(err){
            console.log("Error ", err)
            return
        } else {
            const todoList = JSON.parse(jsonString)
            res.json(todoList)
        }
    })
})

// POST: new list

app.post('/todolist', (req, res)=>{
    const newList = req.body
    console.log(newList)
})

app.listen(port, ()=> {console.log("Hello from port: " + port)})