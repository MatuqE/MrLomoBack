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

    const eliminar = (req, res) => {

        const id = req.params.id;

        db.query(`DELETE FROM stock WHERE idStock = ${id}`, (err, result) => {
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
            cantidad
        } = req.body;
    
    
        db.query(
            `UPDATE stock SET cantidad = ${cantidad}
                            WHERE idStock= ${id}`,  
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
        );
      };


module.exports = { mostrar, mostrarUno, eliminar, editar};