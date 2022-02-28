const Router = require("express-promise-router");
const bodyParser = require('body-parser');
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
  getArtOrden,
  postOrdenCompra,
  getOrdenBySolicitud
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
  getCuentaContable
} = require("../controlador/Cuenta_contable");

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

//Rutas de Elementos
router.get("/elemento/:id_solicitud", getElemento);

//Rutas de Ordenes de compra
router.put("/orden_c/:id_orden_compra/:estado", putOrdenEstado);
router.get("/ordenes", getOrdenes);
router.get("/orde_art/:id_orden_c", getArtOrden);
router.get("/ordenCompraBySolci/:id_solicitud", getOrdenBySolicitud);
router.post("/crear_orden/:id_orden_compra/:jefe_compra/:aprob_grte/:id_solicitud/:total", postOrdenCompra);

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
