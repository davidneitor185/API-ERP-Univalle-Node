const Router = require("express-promise-router");
const bodyParser = require('body-parser');
const router = new Router();
const pool = require("../controlador/conexion");


const {
  getFuncionario,
  getFuncionariobyID,
  postFuncionario,
  addFuncionario
  
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
} = require("../controlador/cuenta_contable");

const {
  getContrataciones,
  addContrataciones,
  deleteContratacion
} = require("../controlador/contratacion");


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

const { getRoles } = require("../controlador/roles");

const { getJefes } = require("../controlador/jefes");

const { getUsuarioID, putUsuario, postUsuario, getUsuarios, putAcceso } = require("../controlador/usuario");

const { getCuentasCobrar, getOrdenServicioCerrada, getDetallesCxC, getFechaLim, postCuentaCobrar, putCuentaCobrar } = require("../controlador/cuentasxCobrar");

//Rutas de cuenta contable
router.get("/cuenta_cont", getCuentaCont);
router.post("/crear_cuenta", postCuentaCont);


// Rutas de funcionario
router.get("/funcionarios", getFuncionario);
router.get("/funcionarioID/:id_funcionario", getFuncionariobyID);
router.post("/funcionario", postFuncionario);
router.post("/addFuncionario", addFuncionario);


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
router.post(
  "/crear_orden/:id_orden_compra/:jefe_compra/:aprob_grte/:id_solicitud/:total",
  postOrdenCompra
);

//Rutas de Roles
router.get("/roles", getRoles);

//Rutas de Jefes
router.get("/jefes", getJefes);

//Rutas de Usuarios
router.get("/usuarioID/:id_funcionario", getUsuarioID);
router.put("/modificar_usuario", putUsuario)
router.post("/usuario", postUsuario);
router.get("/usuarios", getUsuarios);
router.put("/modificar_acceso/:id_cuenta", putAcceso);

//Rutas de Cuentas x Cobrar
router.get("/cuentasxcobrar", getCuentasCobrar);
router.get("/ordenservicioCxC", getOrdenServicioCerrada);
router.get("/detalles/:id_cuentaxc", getDetallesCxC);
router.get("/detalles/fechita", getFechaLim); 
router.post("/cuentaxc" ,postCuentaCobrar);
router.put("/actualizar_estado", putCuentaCobrar);

module.exports = router;
