const { db } = require("../database/config");

const mostrar = (req, res) => {
  db.query("SELECT * FROM categoria;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
const mostrarPorCategoria = (req, res) => {
  
  const { id } = req.params;
  
  db.query(`SELECT p.codProducto , p.nombre, p.precio, c.IdCategoria FROM productos p
            INNER JOIN categoria c
            ON c.idCategoria = p.id_Categoria
            WHERE p.id_Categoria = ${id};`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};


const registrar = (req, res) => {

  const nombre = req.body.nombre;

  db.query(
    `INSERT INTO categoria ( nombre ) values("${nombre}");`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

const borrar = (req, res) => {
  const  idDetalleVenta  = req.params.id

  db.query(`DELETE FROM detalleVenta WHERE idDetalleVenta = ${idDetalleVenta};`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};


  
  module.exports = { mostrar, mostrarPorCategoria, registrar };
