const express = require("express")
const server = express()

const db = require("./database/db")

server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

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

server.post("/savepoint", (req, res) => {
    // Define constantes para adicionar dados em uma tabela.
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    // Insere dados numa tabela
    db.run(query, values, afterInsertData)

    // Função para vericar se houve erro na inserção.
    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso!")
        console.log(this)

        return res.render("create.html", { saved: true })
    }
})

server.get("/search", (req, res) => {
    const search = req.query.search

    if (search == "") {
        return res.render("search.html", { total: 0 })
    }

    // Realiza uma consulta no banco de dados.
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        // Renderiza os dados na página html.
        return res.render("search.html", { places: rows, total: total })
    })
})


server.listen(3000)