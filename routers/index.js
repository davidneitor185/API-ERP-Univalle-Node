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
  getElementos,
  postelement
} = require("../controlador/elemento");

const {
  putOrdenEstado, 
  getOrdenes, 
  getArtOrden,
  postOrdenCompra,
  getOrdenBySolicitud,
  getOrden,
  postOrdenArt
} = require("../controlador/ordenes_c");
const pool = require("../controlador/conexion");

const {
  getProveedores,
} = require("../controlador/proveedor");

//Rutas de proveedor
router.get("/proveedores", getProveedores);

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
router.post("/postelement", postelement);

//Rutas de Ordenes de compra
router.put("/orden_c/:id_orden_compra/:estado", putOrdenEstado);
router.get("/ordenes", getOrdenes);
router.get("/orde_art/:id_orden_c", getArtOrden);
router.get("/ordenCompraBySolci/:id_solicitud", getOrdenBySolicitud);
router.post("/crear_orden", postOrdenCompra);
router.get("/orden_compra/:id_orden", getOrden);
router.post("/crear_orden_art", postOrdenArt);


module.exports = router;
