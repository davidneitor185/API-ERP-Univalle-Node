const pool = require("./conexion");

const getJefes = async (req, res) => {
    try {
      const response = await pool.query(
        `SELECT * FROM jefe`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

  module.exports = {
      getJefes,
  }; 