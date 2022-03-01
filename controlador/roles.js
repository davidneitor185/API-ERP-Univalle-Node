const pool = require("./conexion");

const getRoles = async (req, res) => {
    try {
      const response = await pool.query(
        `SELECT * FROM rol`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

  module.exports = {
      getRoles,
  };