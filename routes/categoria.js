//     ---- Destructuramos express y solo usamos router ----     //
const { Router } = require("express");
const router = Router();

const { mostrar, mostrarPorCategoria, registrar } = require ("../controllers/categoria")

//     ---- Creamos las rutas ----     //

router.get("/", mostrar)
router.get("/:id", mostrarPorCategoria)
router.post("/registrar", registrar)




module.exports=router;