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
    res.send(`Se ha cambiado el estado de ${id_orden_compra} a ${estado}`);
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
  
  //Obtiene las filas que pertenecen a la misma solicitud interna
  const getOrdenBySolicitud = async(req, res) => {
    try {
        var id_solicitud = req.params.id_solicitud;
        const response = await pool.query(
            `select id_orden_compra, jefe_compra, aprob_grte, id_solicitud, total from 
                orden_compra WHERE id_solicitud=${id_solicitud}`
        );
        res.send(response.rows);
    }catch(e) {
        console.log(e);
    }
  };

const postOrdenCompra = async(req, res) => {
  try {
    var id_orden_compra = req.params.id_orden_compra;
    var jefe_compra = req.params.jefe_compra;
    var aprob_grte = req.params.aprob_grte;
    var id_solicitud = req.params.id_solicitud;
    var total = req.params.total;
    var estado = req.params.estado;

      const response = await pool.query(
        `INSERT INTO orden_compra VALUES (${id_orden_compra}, ${jefe_compra}, ${aprob_grte}, ${id_solicitud}, ${total})`
      );
      res.send(response.rows);
  }catch(e) {
    console.log(e);
  }
};


module.exports = {
    putOrdenEstado,
    getOrdenes,
    getArtOrden,
    postOrdenCompra,
    getOrdenBySolicitud
};
