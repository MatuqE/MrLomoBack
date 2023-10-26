//Express: su objetivo es la de poder crear un servidor web en un puerto cualqiera
// creamos una instancia de express, es basicamente un objeto ;
const express = require('express');

//     ---- MODULOS ----     //

const logger = require("morgan");
const compression =require("compression");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");


const app = express();
const detalleVenta = require ('./routes/detalleVenta')
const venta = require ('./routes/venta')
const productos = require ('./routes/productos')
const contar = require ('./routes/contar')
const categoria = require ('./routes/categoria')
const ingredientes = require ('./routes/ingredientes')
const stock = require ('./routes/stock')


app.use(bodyParser.json());
app.use(compression());  
app.use(logger("dev")); 
app.use(cors())



app.use("/detalleVenta", detalleVenta)
app.use("/venta", venta)
app.use("/productos", productos)
app.use("/contar", contar)
app.use("/categoria", categoria)
app.use("/ingredientes", ingredientes)
app.use ("/stock",stock)


app.get("/", (req, res) => {
    res.send("Welcome to Mr Lomo Program 2023<br/> Matias Bordenave Web Dev<br> ");
});

  
app.listen(8000, () => {
    console.log("escuchando en el puerto",8000);
});