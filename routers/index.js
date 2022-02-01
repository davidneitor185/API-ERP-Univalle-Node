const Router = require("express-promise-router");
const router = new Router();

const {
  getFuncionario,
  getFuncionariobyID,
  postFuncionario
  
} = require("../controlador/funcionario");

const {
  getCuenta,
  getCuentas
} = require("../controlador/cuenta");

const {
  getSolicitudes,
  getSolicitud
} = require("../controlador/solicitud");

const {
  getElemento
} = require("../controlador/elemento");

const {
  putOrdenEstado, 
  getOrdenes, 
  getArtOrden
} = require("../controlador/ordenes_c");

// Rutas de funcionario
router.get("/funcionarios", getFuncionario);
router.get("/funcionarioID/:id_funcionario", getFuncionariobyID);
router.post("/funcionario", postFuncionario);

// Rutas de cuenta
router.get("/cuenta/:email/:contrasena", getCuenta);
router.get("/cuentas", getCuentas);

// Rutas de Solicitudes
router.get("/solicitudes", getSolicitudes);
router.get("/solicitud/:id_solicitud", getSolicitud);

//Rutas de Elementos
router.get("/elemento/:id_solicitud", getElemento);

//Rutas de Ordenes de compra
router.put("/orden_c/:id_orden_compra/:estado", putOrdenEstado);
router.get("/ordenes", getOrdenes);
router.get("/orde_art/:id_orden_c", getArtOrden);

module.exports = router;
