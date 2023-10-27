const mysql = require("mysql") //  instalar mysql

//     ---- Creamos la conexion a la db con los respectivos datos ----     //

const db = mysql.createConnection({

    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE

})

module.exports = { db }