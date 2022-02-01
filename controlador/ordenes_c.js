const pool = require("./conexion");

const putOrdenEstado= async (req, res) => {
  try {      
      const id_orden_compra = req.params.id_orden_compra;
      const estado = req.params.estado;
    const response = await pool.query(      
      `UPDATE orden_compra
      SET estado = '${estado}'
      WHERE id_orden_compra = '${id_orden_compra}'`
    );
    //console.log(response.rows);
    //res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

const getOrdenes= async (req, res) => {
    try {
      const response = await pool.query(
        `SELECT *,orden_compra.estado as est FROM orden_compra
        join solicitud_interna on orden_compra.id_solicitud = solicitud_interna.id_solicitud`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

  const getArtOrden= async (req, res) => {
    const id_orden_c = req.params.id_orden_c;
    try {
      const response = await pool.query(
        `SELECT * FROM orden_articulo join elemento on orden_articulo.id_articulo=elemento.id_elemento
        where id_orden_c=${id_orden_c}`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };




module.exports = {
    putOrdenEstado,
    getOrdenes,
    getArtOrden
};