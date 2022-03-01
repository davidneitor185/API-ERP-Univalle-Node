const pool = require("./conexion");

const getCuentasCobrar = async (req, res) => {
  try {
    const response = await pool.query(
      `SELECT * FROM cuentaxcobrar as cu inner JOIN ordenservicio as orden
          on cu.idordenservicio = orden.idordenservicio`
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

const getOrdenServicioCerrada = async (req, res) => {
  try {
    const response = await pool.query(
      `SELECT orden.idordenservicio, nombre_funcionario, costototal, estado 
          FROM ordenservicio as orden LEFT JOIN cuentaxcobrar as cuenta
                     ON orden.idordenservicio = cuenta.idordenservicio 
		      left join funcionario on empleadoasignado = id_funcionario
                     WHERE estado= 'Cerrada' and (id_cuentaxc is null or estado_cxc = 'Anulada')`
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

const getDetallesCxC = async (req, res) => {
  try {
    const { id_cuentaxc } = req.params;
    const response = await pool.query(
      `SELECT * FROM cuentaxcobrar NATURAL JOIN ordenservicio
      LEFT JOIN funcionario ON empleadoasignado = id_funcionario
      WHERE id_cuentaxc = ${id_cuentaxc}`
    );
    res.send(response.rows[0]);
  } catch (e) {
    console.log(e);
  }
};

const getFechaLim = async (req, res) => {
  try {
    const response = await pool.query(`SELECT vencimiento FROM datos_maestros`);
    res.send(response.rows[0]);
  } catch (e) {
    console.log(e);
  }
};

const postCuentaCobrar = async (req, res) => {
  try {
    const { id_orden_servicio, estado_cxc, fecha_limite } = req.body;

    const insertCuenta = await pool.query(
      ` INSERT INTO cuentaxcobrar (
            idordenservicio, estado_cxc, fecha_limite)
            VALUES ( ${id_orden_servicio}, '${estado_cxc}', '${fecha_limite}') `
    );

    res.send("si llego");
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
};

const putCuentaCobrar = async (req, res) => {
  try {
    const { estado_cxc, id_cuentaxc } = req.body;
    console.log(req.body);
    const response = await pool.query(
      `UPDATE cuentaxcobrar SET estado_cxc = '${estado_cxc}'
       WHERE id_cuentaxc = ${id_cuentaxc}`
    );

    res.send("Se actualizo con exito el estado");
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
};

module.exports = {
  getCuentasCobrar,
  getOrdenServicioCerrada,
  getDetallesCxC,
  getFechaLim,
  postCuentaCobrar,
  putCuentaCobrar,
};
