//     ---- Destructuramos express y solo usamos router ----     //
const { Router } = require("express");
const router = Router();


const { mostrar,mostrarUno,registrar,eliminar,editar } = require ("../controllers/stock")


//     ---- Creamos las rutas ----     //

router.get("/",mostrar)
router.get("/:id",mostrarUno)
router.post("/registrar",registrar)
router.delete("/eliminar/:id",eliminar)
router.put("/editar/:id", editar)



module.exports=router;