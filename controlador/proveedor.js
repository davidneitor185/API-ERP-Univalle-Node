const pool = require("./conexion");

const getProveedores= async (req, res) => {
  try {      
    const response = await pool.query(
      `SELECT * FROM proveedor`
    );
    //console.log(response.rows);
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};


module.exports = {
  getProveedores
  
};
