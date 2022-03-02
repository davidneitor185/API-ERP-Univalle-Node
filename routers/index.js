const Router = require("express-promise-router");
const bodyParser = require('body-parser');
const router = new Router();

const {
  getFuncionario,
  getFuncionariobyID,
  postFuncionario,
  addFuncionario
  
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
  getOsEmpleado,
  PostOrdenesServicio,
  DeleteOrdenesServicio,
  putEstadoOS,
  editOS
} = require("../controlador/Ordenes_servicio");

const {
  getClienteIDs,
  getClientes
} = require("../controlador/Clientes");

const {
  getServiciosOS,
  postServiciosOS
} = require("../controlador/ServiciosOS");

const {
  getNominas,
  getInfoNomina,
  getPagosNomina,
  postPagarNomina,
  postNomina,
  deleteNomina
} = require("../controlador/Nomina");

const {
  getCuentaContable,
  getCuentaCont,
  postCuentaCont
} = require("../controlador/Cuenta_contable");

const {
  getItems
} = require("../controlador/item");

const {
  getContrataciones,
  addContrataciones,
  deleteContratacion
} = require("../controlador/contratacion");

const {
  getJefes
} = require("../controlador/jefe");


const pool = require("../controlador/conexion");


//Rutas de cuenta contable
router.get("/cuenta_cont", getCuentaCont);
router.post("/crear_cuenta", postCuentaCont);


// Rutas de funcionario
router.get("/funcionarios", getFuncionario);
router.get("/funcionarioID/:id_funcionario", getFuncionariobyID);
router.post("/funcionario", postFuncionario);
router.post("/addFuncionario", addFuncionario);


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


//Rutas de Items
router.get("/items", getItems);

//Rutas de Ordenes de Servicio
router.get("/ordenesServicio", getOrdenesServicio);
router.get("/osEmpleado/:empleado", getOsEmpleado);
router.post("/crearServicio", PostOrdenesServicio);
router.delete("/borraOServicio/:id", DeleteOrdenesServicio);
router.put("/editStateOS", putEstadoOS);
router.put("/editOS", editOS);


//Rutas de Clientes
router.get("/IDclientes", getClienteIDs);
router.get("/clientes", getClientes);


//Rutas de Servicios
router.get("/serviciosOS", getServiciosOS);
router.post("/newServicios", postServiciosOS);


//Rutas de Nomina
router.get("/nominas", getNominas);
router.get("/nomina/:id", getInfoNomina);
router.get("/pagosNomina", getPagosNomina);
router.post("/pagarNomina", postPagarNomina);
router.post("/addNomina", postNomina);
router.delete("/deleteNomina/:id", deleteNomina);


//Rutas de contratacion
router.get("/contrataciones", getContrataciones);
router.post("/addContratacion", addContrataciones);
router.delete("/deleteContratacion/:idpersona", deleteContratacion);

//Rutas de Jefes
router.get("/jefes", getJefes);


//Rutas de Cuentas Contables
router.get("/cuentaContable", getCuentaContable);


module.exports = router;
