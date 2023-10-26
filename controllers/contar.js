const { db } = require("../database/config");

const contar = (req, res) => {
    db.query("SELECT COUNT(*) AS Contar FROM venta", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const suma = (req, res) => {
  const {id} = req.params
  db.query(`SELECT sum(subTotal) AS suma FROM detalleVenta WHERE id_Venta = ${id};`, (err, result)=>{
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
}



  module.exports = { contar, suma };