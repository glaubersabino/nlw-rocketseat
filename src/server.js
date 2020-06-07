const express = require("express")
const server = express()

server.use(express.static("public"))

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create", (req, res) => {
    res.sendFile(__dirname + "/views/create.html")
})

server.get("/search", (req, res) => {
    res.sendFile(__dirname + "/views/search.html")
})


server.listen(3000)