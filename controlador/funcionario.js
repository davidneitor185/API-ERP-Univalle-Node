const pool = require("./conexion");

const getFuncionario= async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT * FROM funcionario ORDER BY id_funcionario"
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

const getFuncionariobyID = async (req, res) => {
  
  const id_funcionario = req.params.id_funcionario;
  try {
    const response = await pool.query(
      `select * from funcionario where id_funcionario = ${id_funcionario}`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

const postFuncionario = async (req, res) => {
  try {
    const id_jefe = req.params.jefe_inmediato;
    const nombre_funcionario = req.params.nombre_funcionario;
    const email = req.params.email;
    const depto_funcionario = req.params.depto_funcionario;
   

    const response = await pool.query(
      `INSERT INTO public.funcionario(
        jefe_inmediato, nombre_funcionario, email, depto_funcionario)
        VALUES (${id_jefe}, ${nombre_funcionario} , ${email}, ${depto_funcionario})
        returning id_Funcionario`
    ); 
    
    res.send(response.rows);
    
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getFuncionario,
  getFuncionariobyID,
  postFuncionario
};
