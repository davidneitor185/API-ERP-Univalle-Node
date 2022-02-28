const Router = require("express-promise-router");
const router = new Router();

const {
  getFuncionario,
  getFuncionariobyID,
  postFuncionario,
} = require("../controlador/funcionario");

const { getCuenta, getCuentas } = require("../controlador/cuenta");

const { getSolicitudes, getSolicitud } = require("../controlador/solicitud");

const { getElemento } = require("../controlador/elemento");

const {
  putOrdenEstado,
  getOrdenes,
  getArtOrden,
  postOrdenCompra,
  getOrdenBySolicitud,
} = require("../controlador/ordenes_c");
const pool = require("../controlador/conexion");

const { getRoles } = require("../controlador/roles");

const { getJefes } = require("../controlador/jefes");

const { getUsuarioID, putUsuario, postUsuario, getUsuarios } = require("../controlador/usuario");

const { getCuentasCobrar, getOrdenServicioCerrada, getDetallesCxC, getFechaLim, postCuentaCobrar, putCuentaCobrar } = require("../controlador/cuentasxCobrar");

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

//Rutas de Cuentas x Cobrar
router.get("/cuentasxcobrar", getCuentasCobrar);
router.get("/ordenservicioCxC", getOrdenServicioCerrada);
router.get("/detalles/:id_cuentaxc", getDetallesCxC);
router.get("/detalles/fechita", getFechaLim); 
router.post("/cuentaxc" ,postCuentaCobrar);
router.put("/actualizar_estado", putCuentaCobrar);

module.exports = router;
