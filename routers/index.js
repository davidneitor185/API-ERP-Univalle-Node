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
  getSolicitud,
  putSolicitud,
  postSolicitud
} = require("../controlador/solicitud");

const {
  getElemento,
  getElementos
} = require("../controlador/elemento");

const {
  putOrdenEstado, 
  getOrdenes, 
  getArtOrden,
  postOrdenCompra,
  getOrdenBySolicitud
} = require("../controlador/ordenes_c");
const pool = require("../controlador/conexion");

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
router.put("/updatesolicitud/:id/:estado", putSolicitud);
router.post("/postsolicitud", postSolicitud);

//Rutas de Elementos
router.get("/elemento/:id_solicitud", getElemento);
router.get("/elementos", getElementos);

//Rutas de Ordenes de compra
router.put("/orden_c/:id_orden_compra/:estado", putOrdenEstado);
router.get("/ordenes", getOrdenes);
router.get("/orde_art/:id_orden_c", getArtOrden);
router.get("/ordenCompraBySolci/:id_solicitud", getOrdenBySolicitud);
router.post("/crear_orden/:id_orden_compra/:jefe_compra/:aprob_grte/:id_solicitud/:total", postOrdenCompra);


module.exports = router;
