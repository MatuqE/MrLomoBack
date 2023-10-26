//     ---- Destructuramos express y solo usamos router ----     //
const { Router } = require("express");
const router = Router();

const { mostrar, registrar, borrar, borrarDetalle, mostrarProductos, mostrarProductos2 } = require ("../controllers/detalleVenta")

//     ---- Creamos las rutas ----     //

router.get("/", mostrar)
router.get("/venta/:id", mostrarProductos)
router.get("/ventaLEti/:id", mostrarProductos2)
router.post("/registrar", registrar)
router.delete("/borrar/:id", borrar)
router.delete("/borrarDetalle/:id", borrarDetalle)




module.exports=router;