const pool = require("./conexion");

const putDatosM = async (req, res) =>{
    const {
        pagot,
        recepcionp,
        pagon,
        vencimiento
    } = req.body;
    try {
      const response = await pool.query(
      `update datos_maestros set pagot = ${pagot}, recepcionp = ${recepcionp}, pagon = ${pagon},
       vencimiento = ${vencimiento} where id_dt = 1`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

  const getDatosM = async (req, res) =>{
    try {
      const response = await pool.query(
        `SELECT * FROM datos_maestros`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

module.exports = { putDatosM, getDatosM };