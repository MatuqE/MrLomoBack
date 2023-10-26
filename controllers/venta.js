const { db } = require("../database/config");

const mostrar = (req, res) => {
  db.query("SELECT * FROM venta;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const mostrarJoinVentas = (req, res) => {
  db.query(`SELECT p.nombre, p.descripcion, DATE(v.fechaYHora) AS fecha_venta, SUM(dv.cantidad) AS total_vendido 
            FROM productos p
            INNER JOIN detalleVenta dv ON p.codProducto = dv.cod_Producto
            INNER JOIN venta v ON dv.id_Venta = v.idVenta
            GROUP BY p.codProducto, p.nombre, p.descripcion, fecha_venta
            ORDER BY total_vendido DESC;`
  , (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const registrar = (req, res) => {
  const montoTotal = req.body.montoTotal;
  const fechaYHora =req.body.fechaYHora;

  db.query(
    `INSERT INTO venta ( montoTotal, fechaYHora) values(${montoTotal},"${fechaYHora}")`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};


  
  module.exports = { mostrar, mostrarJoinVentas, registrar };