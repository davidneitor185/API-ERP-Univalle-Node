const pool = require("./conexion");



  const getElemento= async (req, res) => {
    try {
      const id_solicitud = req.params.id_solicitud;
      const response = await pool.query(
        `SELECT * FROM elemento where id_solicitud = ${id_solicitud}`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

  const getElementos= async (req, res) => {
    try {
      
      const response = await pool.query(
        `SELECT * FROM elemento`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

module.exports = {
  getElemento,
  getElementos  
};
