const pool = require("./conexion");

const getCuenta= async (req, res) => {
  try {      
      const email = req.params.email;
      const contrasena = req.params.contrasena;
    const response = await pool.query(
      `SELECT * FROM cuenta natural join  funcionario where funcionario.email = '${email}' and cuenta.contraseña = '${contrasena}'`
    );
    //console.log(response.rows);
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

const getCuentas= async (req, res) => {
    try {
      const response = await pool.query(
        `SELECT * FROM cuenta`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

module.exports = {
  getCuenta,
  getCuentas
  
};
