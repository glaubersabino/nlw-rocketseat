const express = require("express")
const server = express()

const db = require("./database/db")

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
    // Realiza uma consulta no banco de dados.
    db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        // Renderiza os dados na página html.
        return res.render("search.html", { places: rows, total: total })
    })
})


server.listen(3000)