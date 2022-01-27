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

module.exports = {
  getFuncionario,
  getFuncionariobyID,
 
};
