const pool = require("./conexion");

const getCuenta= async (req, res) => {
  try {
      const email = req.params.email;
      const contraseña = req.params.contraseña;
    const response = await pool.query(
      `SELECT * FROM cuenta natural join  funcionario where funcionario.email = ${email} and cuenta.contraseña = ${contraseña}`
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getCuenta,
  
};
