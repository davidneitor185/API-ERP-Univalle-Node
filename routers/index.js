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

//Rutas de Elementos
router.get("/elemento/:id_solicitud", getElemento);

//Rutas de Ordenes de compra
router.put("/orden_c/:id_orden_compra/:estado", putOrdenEstado);
router.get("/ordenes", getOrdenes);
router.get("/orde_art/:id_orden_c", getArtOrden);
router.get("/ordenCompraBySolci/:id_solicitud", getOrdenBySolicitud);
router.post("/crear_orden/:id_orden_compra/:jefe_compra/:aprob_grte/:id_solicitud/:total", postOrdenCompra);

//Rutas de Jefe
router.get("/jefe", async function(req, res) {
  try {
    const response = await pool.query(
      'select * from jefe'
    );
    res.send(response.rows);
  }catch(e) {
    console.log(e);
  }
});

//Rutas de ordenes de compra
router.get("/ordenesCompra", async function(req, res) {
  try {
    const response = await pool.query(
      'select * from orden_compra'
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
});

//Ruta para get de elementos
router.get("/elemento", async function(req, res) {
  try {
    const response = await pool.query(
      'select * from elemento'
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
})

//Ruta de Ordenes de Articulo
router.get("/ordenArticulo", async function(req, res) {
  try {
    const response = await pool.query(
      'select * from orden_articulo'
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
})

module.exports = router;
