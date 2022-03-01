const Router = require("express-promise-router");
const bodyParser = require('body-parser');
const router = new Router();
const pool = require("../controlador/conexion");

const {
  getFuncionario,
  getFuncionariobyID,
  postFuncionario
  
} = require("../controlador/funcionario");

const {
  postItem,
  getItems
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
  getCuentasxpagar,
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
  getSoloOrden,
  getOrden,
  postOrdenArt
} = require("../controlador/ordenes_c");

const {
  getOrdenesServicio,
  PostOrdenesServicio,
  DeleteOrdenesServicio
} = require("../controlador/Ordenes_servicio");

const {
  getClienteIDs
} = require("../controlador/Clientes");

const {
  PostServiciosOS
} = require("../controlador/ServiciosOS");

const {
  getNominas,
  getInfoNomina,
  getPagosNomina,
  postPagarNomina,
  postNomina
} = require("../controlador/Nomina");


const {
  getCuentaContable,
  getCuentaCont,
  postCuentaCont
} = require("../controlador/cuenta_contable");

const {
  getInvent,
  postEntrada
} = require("../controlador/inventario");

//Rutas de inventario
router.get("/inventario", getInvent);
router.post("/postentrada", postEntrada);

//Rutas de cuenta contable
router.get("/cuenta_cont", getCuentaCont);
router.post("/crear_cuenta", postCuentaCont);

//Rutas de proveedor
router.get("/proveedores", getProveedores);

// Rutas de funcionario
router.get("/funcionarios", getFuncionario);
router.get("/funcionarioID/:id_funcionario", getFuncionariobyID);
router.post("/funcionario", postFuncionario);

// Rutas de Item
router.post("/nuevoitem", postItem);
router.get("/getitems", getItems);

// Rutas de cuenta
router.get("/cuenta/:email/:contrasena", getCuenta);
router.get("/cuentas", getCuentas);

//Rutas de cuenta contable
router.get("/cuenta_contable/todos", getCContables);
router.put("/cuenta_contable/modifica", putCContables);

// Rutas de Cuentas Por Pagar
router.get("/cuentaxpagar/todo", getCuentasxpagar);
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
router.put("/updatesolicitud/:id/:estado", putSolicitud);
router.post("/postsolicitud", postSolicitud);

//Rutas de Elementos
router.get("/elemento/:id_solicitud", getElemento);
router.get("/elementos", getElementos);
router.post("/postelement", postelement);

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
router.post("/crear_orden", postOrdenCompra);
router.get("/orden_compra/:id_orden", getOrden);
router.post("/crear_orden_art", postOrdenArt);

//Rutas de Ordenes de Servicio
/*const jsonParser = bodyParser.json();
const json_2 = bodyParser.json();*/
router.get("/ordenesServicio", getOrdenesServicio);
router.post("/crearServicio", PostOrdenesServicio);
router.delete("/borraOServicio/:id", DeleteOrdenesServicio);

//Rutas de Clientes
router.get("/IDclientes", getClienteIDs);

//Rutas de Servicios
router.post("/newServicios", PostServiciosOS);

//Rutas de Nomina
router.get("/nominas", getNominas);
router.get("/nomina/:id", getInfoNomina);
router.get("/pagosNomina", getPagosNomina);
router.post("/pagarNomina", postPagarNomina);
router.post("/addNomina", postNomina);

//Rutas de Cuentas Contables
router.get("/cuentaContable", getCuentaContable);


module.exports = router;
