//     ---- Destructuramos express y solo usamos router ----     //
const { Router } = require("express");
const router = Router();

const { mostrar, mostrarJoinVentas, registrar } = require ("../controllers/venta")

//     ---- Creamos las rutas ----     //

router.get("/", mostrar)
router.get("/joinVentas", mostrarJoinVentas)
router.post("/registrar", registrar)





module.exports=router;