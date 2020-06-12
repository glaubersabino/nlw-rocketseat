const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {

//     // Cria uma tabela no SQLite
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     // Define constantes para adicionar dados em uma tabela.
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `

//     const values = [
//         "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1161&q=80",
//         "Colectoria",
//         "Guilherme Gemballa, Jardim América",
//         "260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     // Insere dados numa tabela
//     db.run(query, values, afterInsertData)

//     // Função para vericar se houve erro na inserção.
//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso!")
//         console.log(this)
//     }

//     // Deleta dados de uma tabela.
//     db.run(`DELETE FROM places WHERE id = ?`, [2], function (err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Deletado com sucesso!")
//     })

//     // Consulta dados de uma tabela.
//     db.all(`SELECT * FROM places`, function (err, rows) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log(rows)
//     })
// })