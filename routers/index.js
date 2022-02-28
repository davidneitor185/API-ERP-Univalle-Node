const Router = require("express-promise-router");
const router = new Router();

const {
  getFuncionario,
  getFuncionariobyID,
  postFuncionario
  
} = require("../controlador/funcionario");

const {
  postItem
} = require("../controlador/item");

const {
  getCuenta,
  getCuentas
} = require("../controlador/cuenta");

const {
  getCContables,
  putCContables
} = require("../controlador/cuenta_contable");

const {
  getCtxpR,
  postCntxpagar,
  getFullCtnxp,
  putCtnxp,
  putTotal
} = require("../controlador/cuentaxpagar");

const {
  putDatosM,
  getDatosM,
  getJoinPagoTercero
} = require("../controlador/datos_maestros");

const {
  postDetaCobro
} = require("../controlador/detalle_cobros");

const {
  getSolicitudes,
  getSolicitud
} = require("../controlador/solicitud");

const {
  getElemento
} = require("../controlador/elemento");

const {
  getProveedores
} = require("../controlador/proveedor");

const {
  getRecibos,
  postRecibo
} = require("../controlador/recibo_pago");

const {
  putOrdenEstado, 
  getOrdenes, 
  getArtOrden,
  postOrdenCompra,
  getOrdenBySolicitud,
  getSoloOrden
} = require("../controlador/ordenes_c");
const pool = require("../controlador/conexion");

// Rutas de funcionario
router.get("/funcionarios", getFuncionario);
router.get("/funcionarioID/:id_funcionario", getFuncionariobyID);
router.post("/funcionario", postFuncionario);

// Rutas de Item
router.post("/nuevoitem", postItem);

// Rutas de cuenta
router.get("/cuenta/:email/:contrasena", getCuenta);
router.get("/cuentas", getCuentas);

//Rutas de cuenta contable
router.get("/cuenta_contable/todos", getCContables);
router.put("/cuenta_contable/modifica", putCContables);

// Rutas de Cuentas Por Pagar
router.get("/cuentaxpagar/todo", getCtxpR);
router.get("/cuentaxpagarFull/:id", getFullCtnxp);
router.post("/cuentaxpagar", postCntxpagar);
router.put("/cuentaxpagar/update/:id", putCtnxp);
router.put("/cuentaxpagar/update", putTotal);

//Rutas de Datos Maestros
router.get("/datosmaestros", getDatosM);
router.get("/datosmaestros_join_terceros", getJoinPagoTercero);
router.put("/datosmaestros_put", putDatosM);

//Rutas de Detalle Cobro
router.post("/detalle_cobro/", postDetaCobro);

// Rutas de Solicitudes
router.get("/solicitudes", getSolicitudes);
router.get("/solicitud/:id_solicitud", getSolicitud);

//Rutas de Elementos
router.get("/elemento/:id_solicitud", getElemento);

//Rutas de Proveedores
router.get("/proveedor/todos", getProveedores);

//Rutas de recibos de pago
router.get("/recibos_pago/todos", getRecibos);
router.post("/recibos_pago/nuevo", postRecibo);

//Rutas de Ordenes de compra
router.put("/orden_c/:id_orden_compra/:estado", putOrdenEstado);
router.get("/ordenes", getOrdenes);
router.get("/orde_art/:id_orden_c", getArtOrden);
router.get("/ordenCompraBySolci/:id_solicitud", getOrdenBySolicitud);
router.get("/soloorden_c", getSoloOrden);
router.post("/crear_orden/:id_orden_compra/:jefe_compra/:aprob_grte/:id_solicitud/:total", postOrdenCompra);


module.exports = router;
