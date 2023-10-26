//     ---- Destructuramos express y solo usamos router ----     //
const { Router } = require("express");
const router = Router();

const { contar, suma } = require ("../controllers/contar")

//     ---- Creamos las rutas ----     //

router.get("/", contar)
router.get("/suma/:id", suma)




module.exports=router;