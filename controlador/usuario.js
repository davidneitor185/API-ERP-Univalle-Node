const pool = require("./conexion");

const getUsuarioID = async (req, res) => {
  const id_funcionario = req.params.id_funcionario;
  try {
    const response = await pool.query(
      `select * from funcionario natural join cuenta where id_funcionario = ${id_funcionario}`
    );
    res.send(response.rows[0]);
  } catch (e) {
    console.error(e);
  }
};

const postUsuario = async (req, res) => {
  try {
    const { nombre, id, email, contra, tel, rol, departamento, jefe } =
      req.body;

    const response = await pool.query(
      `INSERT INTO funcionario (
          jefe_inmediato, nombre_funcionario, email, depto_funcionario, identificacion, tel)
          VALUES (${jefe}, '${nombre}' , '${email}', '${departamento}', '${id}', '${tel}')
          returning id_Funcionario`
    );
    const insertCuenta = await pool.query(
      ` INSERT INTO cuenta (
            id_rol, id_funcionario, contraseña, acceso)
            VALUES ( ${rol}, ${response.rows[0].id_funcionario}, '${contra}', 'Concedido') `
    );

    res.send("si llego");
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
};

const putUsuario = async (req, res) => {
  try {
    const { nombre, id, email, contra, tel, rol, departamento, jefe, id_funcionario } =
      req.body;
      
    const response = await pool.query(
      `UPDATE funcionario SET
          jefe_inmediato = ${jefe}, nombre_funcionario = '${nombre}' , email = '${email}', 
          depto_funcionario= '${departamento}', identificacion = '${id}', tel = '${tel}'
          WHERE id_Funcionario = ${id_funcionario}`
    );

    const insertCuenta = await pool.query(
      ` UPDATE cuenta  SET
            id_rol = ${rol}, contraseña = '${contra}' 
            WHERE id_Funcionario = ${id_funcionario} `
    );

    res.send("Se actualizo con exito papu");
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
};

const getUsuarios = async (req, res) => {
  try {
       
    const response = await pool.query(
      `SELECT nombre_funcionario, email, identificacion, tel, r.nombre_rol ,id_funcionario
      FROM cuenta NATURAL JOIN funcionario as f,rol as r
      WHERE cuenta.id_rol = r.id_rol`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
};

const putAcceso = async (req, res) => {
  try {
    const {id_cuenta} = req.params;
    const response = await pool.query(
      `UPDATE cuenta SET
      acceso = 'Denegado'
      WHERE id_cuenta = ${id_cuenta}`
    );
    res.send("Se actualizo el acceso");
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
}

module.exports = {
  getUsuarioID,
  putUsuario,
  postUsuario,

  getUsuarios,
  putAcceso,
};
