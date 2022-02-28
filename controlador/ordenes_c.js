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
        join solicitud_interna on orden_compra.id_solicitud = solicitud_interna.id_solicitud
        NATURAL JOIN  proveedor`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

  const getOrden= async (req, res) => {
    try {
      let id_orden = req.params.id_orden;
      const response = await pool.query(
        `SELECT * FROM orden_compra
        NATURAL JOIN  proveedor
        WHERE id_orden_compra = ${id_orden}`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

  //Trae SOLO las órdenes de compra
  const getSoloOrden = async (req, res) =>{
    try {
      const response = await pool.query(
      `SELECT "id_orden_compra" FROM "orden_compra"`
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
    var bd = req.body;
    var jefe_compra = req.body.jefe_compra;
    var id_solicitud = req.body.id_solicitud;
    var total = req.body.total;
    var estado = req.body.estado;
    var id_proveedor = parseInt(req.body.id_proveedor);

      const response = await pool.query(
        `INSERT INTO public.orden_compra(
          jefe_compra, id_solicitud, total, estado, id_proveedor)
          VALUES (${jefe_compra}, ${id_solicitud}, ${total}, '${estado}',${id_proveedor})
          RETURNING id_orden_compra`
      );
      res.send(response.rows);
      
  }catch(e) {
    console.log(e);
  }
};

const postOrdenArt = async(req, res) => {
  try {
    
    var id_orden_compra = req.body.id_orden_compra;
    var id_articulo = req.body.id_articulo;
    var precio = parseInt(req.body.precio);
    var tiempo_llegada = req.body.tiempo_llegada;

    
     const response = await pool.query(
        `INSERT INTO public.orden_articulo(
          id_orden_c, id_articulo, precio, tiempo_llegada)
          VALUES (${id_orden_compra}, ${id_articulo}, ${precio}, '${tiempo_llegada}')`
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
    getOrdenBySolicitud,
    getSoloOrden,
    getOrden,
    postOrdenArt
};
