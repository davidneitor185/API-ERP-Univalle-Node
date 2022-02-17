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

  const putSolicitud = async (req, res) => {
    try {
      const estado = req.params.estado;
      const id = req.params.id;


      
      const response = await pool.query(
        `UPDATE solicitud_interna SET estado = '${estado}' WHERE id_solicitud = ${id}`
      );
      res.send(response.rows);
    } catch (e) {
      console.error(e);
    }
  };

  const postSolicitud= async (req, res) => {
    try {
  
      const {
        id_funcionario,
        estado,
        justificacion,
        tiempo_e
      } = req.body;
      console.log(req.body);
      const response = await pool.query(
        `INSERT INTO public.solicitud_interna(
           justificacion, id_funcionario, tiempo_e, estado)
          VALUES ( '${justificacion}', ${id_funcionario}, '${tiempo_e}', '${estado}')`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };



module.exports = {
  getSolicitudes,
  getSolicitud,
  putSolicitud,
  postSolicitud
  
};
