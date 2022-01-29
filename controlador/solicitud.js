const pool = require("./conexion");



const getSolicitudes= async (req, res) => {
    try {
      const response = await pool.query(
        `SELECT * FROM solicitud_interna`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

module.exports = {
  getSolicitudes
  
};
