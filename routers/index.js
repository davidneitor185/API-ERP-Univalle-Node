const Router = require("express-promise-router");
const router = new Router();

const {
  getFuncionario,
  
} = require("../controlador/funcionario");


// Rutas de funcionario
router.get("/funcionario", getFuncionario);



module.exports = router;
