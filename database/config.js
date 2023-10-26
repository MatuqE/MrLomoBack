const mysql = require("mysql") //  instalar mysql

//     ---- Creamos la conexion a la db con los respectivos datos ----     //

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "hola123",
    database: "sangucheria"
    


})

module.exports = { db }