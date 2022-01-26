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

module.exports = {
  getFuncionario,
 
};
