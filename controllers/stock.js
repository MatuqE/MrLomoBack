const { db } = require("../database/config");

const mostrar = (req, res) => {
    db.query(`select * from ingredientes i
                inner join stock s
                on  s.id_Ingrediente = i.idIngrediente;`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

const mostrarUno = (req, res) => {
    const { codStock } = req.params;

    db.query(
        `SELECT * FROM stock WHERE codStock = ${codStock}`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
};

const registrar = (req, res) => {
    
    const cantidad = req.body.cantidad;
    const id_Ingrediente = req.body.cod_producto;

    db.query(
        "INSERT INTO stock (cantidad, id_Ingrediente) values(?,?)",
        [
            cantidad,
            id_Ingrediente
        ],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )};

    const eliminar = (req, res) => {

        const id = req.params.id;

        db.query(`DELETE FROM stock WHERE codStock =${id}`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    };

    const editar = (req, res) => {
        const id = req.params.id;
        const {
            cod_Producto,
            nombre,
            cantidad
        } = req.body;
    
    
        db.query(
            `
            UPDATE stock id SET cod_Producto = "${cod_Producto}",
                               nombre =" ${nombre}", 
                               cantidad = "${cantidad}"
                                WHERE codStock= ${id}`,

    
    
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
        );
      };







module.exports = { mostrar, mostrarUno, registrar, eliminar, editar};