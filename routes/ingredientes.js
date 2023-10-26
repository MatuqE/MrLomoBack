//     ---- Destructuramos express y solo usamos router ----     //
const { Router } = require("express");
const router = Router();

const { mostrar, prodEIngrediente, registrar } = require ("../controllers/ingredientes")

//     ---- Creamos las rutas ----     //

router.get("/", mostrar)
router.get("/prodEIngrediente", prodEIngrediente)
router.post("/registrar", registrar)




module.exports=router;