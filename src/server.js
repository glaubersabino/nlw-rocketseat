const express = require("express")
const server = express()

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create", (req, res) => {
    return res.render("create.html")
})

server.get("/search", (req, res) => {
    return res.render("search.html")
})


server.listen(3000)