const pool = require("./conexion");


const getInvent= async (req, res) => {
    try {
      const response = await pool.query(
        `SELECT * FROM inventario JOIN item on inventario.item =item.iditem`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };



  module.exports = {
    getInvent
};