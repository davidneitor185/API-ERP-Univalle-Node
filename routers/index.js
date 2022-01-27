const Router = require("express-promise-router");
const router = new Router();

const {
  getFuncionario,
  getFuncionariobyID
  
} = require("../controlador/funcionario");


// Rutas de funcionario
router.get("/funcionario", getFuncionario);
router.get("/funcionarioID/:id_funcionario", getFuncionariobyID);



module.exports = router;
