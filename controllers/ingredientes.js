const { db } = require("../database/config");

const mostrar = (req, res) => {
  db.query("SELECT * FROM ingredientes;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
const prodEIngrediente = (req, res) => {
    
  db.query(`SELECT p.codProducto, p.nombre AS "nombreProducto", GROUP_CONCAT(i.nombre SEPARATOR ', ') AS "ingredientes"
            FROM productos p
            INNER JOIN receta r ON p.codProducto = r.cod_Producto
            INNER JOIN ingredientes i ON r.id_Ingrediente = i.idIngrediente
            GROUP BY p.codProducto, p.nombre;`, (err, result) => {
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
    `CALL AgregarIngredienteYStock("${nombre}");`,
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


  
  module.exports = { mostrar, prodEIngrediente, registrar };
