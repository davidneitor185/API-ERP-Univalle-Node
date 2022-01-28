const Router = require("express-promise-router");
const router = new Router();

const {
  getFuncionario,
  getFuncionariobyID,
  postFuncionario
  
} = require("../controlador/funcionario");

const {
  getCuenta
} = require("../controlador/cuenta");

// Rutas de funcionario
router.get("/funcionarios", getFuncionario);
router.get("/funcionarioID/:id_funcionario", getFuncionariobyID);
router.post("/funcionario", postFuncionario);

// Rutas de cuenta
router.get("/cuenta", getCuenta);


module.exports = router;
