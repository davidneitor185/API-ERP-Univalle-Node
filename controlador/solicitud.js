const pool = require("./conexion");



const getSolicitudes= async (req, res) => {
    try {
      const response = await pool.query(
        `SELECT * FROM solicitud_interna natural join funcionario`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

  const getSolicitud= async (req, res) => {
    try {
      const id_solicitud = req.params.id_solicitud;
      const response = await pool.query(
        `SELECT * FROM solicitud_interna natural join funcionario where id_solicitud = '${id_solicitud}'`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };



module.exports = {
  getSolicitudes,
  getSolicitud
  
};
