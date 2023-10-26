//     ---- Destructuramos express y solo usamos router ----     //
const { Router } = require("express");
const router = Router();

const { mostrar, mostrarUno, mostrarCategoria, mostrarTodasCategorias, registrar } = require ("../controllers/productos")

//     ---- Creamos las rutas ----     //

router.get("/",mostrar)
router.get("/categoria", mostrarTodasCategorias)
router.get("/:id", mostrarUno)
router.post("/registrar", registrar)
router.get("/categoria/:categoria", mostrarCategoria)


module.exports=router;