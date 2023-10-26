const { db } = require("../database/config");

const mostrar = (req, res) => {
  db.query("SELECT * FROM detalleVenta;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const mostrarProductos = (req, res) => {
  
  const { id } = req.params;
  
  db.query(`SELECT * FROM detalleVenta dv
            INNER JOIN productos p
            ON dv.cod_producto = p.codProducto
           
            WHERE id_Venta = ${id};`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const mostrarProductos2 = (req, res) => {
  
  const { id } = req.params;
  
  db.query(`SELECT 
            v.idVenta AS NumeroDeVenta,
            p.codProducto AS CodigoDeProducto,
            p.nombre AS NombreDeProducto,
            c.nombre AS CategoriaDeProducto,
            dv.cantidad AS Cantidad,
            dv.subTotal AS Subtotal
            FROM productos p
            INNER JOIN categoria c 
            ON p.id_Categoria = c.idCategoria
            INNER JOIN detalleventa AS dv
            ON dv.cod_producto = p.codProducto
            INNER JOIN venta AS v ON dv.id_Venta = v.idVenta
            where v.idVenta = ${id};`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const registrar = (req, res) => {
  const cod_Producto= req.body.cod_Producto;
  const id_Venta = req.body.id_Venta;
  const cantidad = req.body.cantidad;
  const subTotal=req.body.subTotal;

  db.query(
    `INSERT INTO detalleVenta (cod_Producto, id_Venta, cantidad, subTotal) values(${cod_Producto},${id_Venta},${cantidad},${subTotal})`,
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

const borrarDetalle = (req, res) => {
  const  id_Venta  = req.params.id

  db.query(`DELETE FROM detalleVenta WHERE id_Venta = ${id_Venta};`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

  
  module.exports = { mostrar, registrar, borrar, borrarDetalle, mostrarProductos, mostrarProductos2 };

//   , mostrarUno, registrar, editar, eliminar 