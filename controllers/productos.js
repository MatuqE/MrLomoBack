const { default: axios } = require("axios");
const { db } = require("../database/config");

const mostrar = (req, res) => {
  db.query("SELECT * FROM productos;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const mostrarUno = (req, res) => {
  
  const { id } = req.params;

  db.query(`SELECT * FROM productos WHERE codProducto = ${id};`, (err, result) => {
   if (err) {
     console.log(err);
   } else {
     res.send(result);
   }
 });
}

const mostrarCategoria = (req, res) => {
  
  const { categoria } = req.params;

  db.query(`SELECT * FROM productos WHERE categoria = "${categoria}";`, (err, result) => {
   if (err) {
     console.log(err);
   } else {
     res.send(result);
   }
 });
}

const mostrarTodasCategorias = (req, res) => {

  db.query(`SELECT categoria FROM productos GROUP BY categoria;`, (err, result) => {
   if (err) {
     console.log(err);
   } else {
     res.send(result);
   }
 });
}

const registrar = (req, res) => {
  const nombre = req.body.nombre;
  const descripcion =req.body.descripcion;
  const precio = req.body.precio;
  const id_Categoria =req.body.id_Categoria;

  db.query(
    `INSERT INTO productos ( nombre, descripcion, precio, id_Categoria) values("${nombre}","${descripcion}", ${precio}, ${id_Categoria})`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};
  
  module.exports = { mostrar, mostrarUno, mostrarCategoria, mostrarTodasCategorias, registrar };